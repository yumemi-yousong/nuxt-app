const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.helloWorld = require('./modules/hogehoge').helloWorld

exports.rest = require('./modules/rest').rest

exports.getData = require('./modules/getData').getData

exports.setData = require('./modules/setData').setData