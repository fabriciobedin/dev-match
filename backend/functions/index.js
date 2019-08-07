const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");
const engines = require("consolidate");

const firebaseApp = firebase.initializeApp(functions.config().firebase);

function getFacts() {
  const ref = firebaseApp.database().ref("facts");
  return ref.once("value").then(snap => snap.val());
}

const app = express();
app.engine("hbs", engines.handlebars);
app.set("views", "./views");
app.set("view engine", "hbs");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

app.get("/timestamp", (req, res) => {
  res.send(`${Date.now()}`);
});

app.get("/timestamp-cached", (req, res) => {
  // public is to save information in server, if you put private it will be saved only in browser
  // max-age is how long it will be cached in the user's browser, in this case it'll be cached for 300 seconds
  // s-maxage is how long it will be cached in CDN, in this case it'll be cached for 600 seconds
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.send(`${Date.now()}`);
});

app.get("/", (req, res) => {
  // res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  getFacts()
    .then(facts => {
      return res.render("index", { facts });
    })
    .catch();
});

exports.app = functions.https.onRequest(app);
