const functions = require('firebase-functions');
const db = require('../firebase').db;

exports.getData = functions.region('asia-northeast1').https.onCall(async (data, context) => {//context에 저장된 유저 로그인 정보 
    //onCall vs onRequest
  if(context.auth.uid){//login ?
   const docRef = db.collection('user').doc(context.auth.uid);
   const snapshot = await docRef.get();
   const record = snapshot.data();
   console.log(record)
   return record;
  }
});