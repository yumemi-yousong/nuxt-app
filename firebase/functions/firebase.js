//admin right로 실행한다는거 
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.db = db;