 const firebase = require('firebase');
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCV5i-_qV-3f9wuefXB7EmZOGsY8v-hUHs",
    authDomain: "nuxtapp-25c01.firebaseapp.com",
    databaseURL: "https://nuxtapp-25c01.firebaseio.com",
    projectId: "nuxtapp-25c01",
    storageBucket: "nuxtapp-25c01.appspot.com",
    messagingSenderId: "848679817126"
  };
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const hoge = 'hogehogehoge';

const json = {
    test: null,
    number: 123456,
    array: ['text1','text2','text3']
};
//내가 만드는 db의 형태로 구성하는 중
const ref = db.collection('testCollection').doc(hoge);

ref.set(json).then(()=>{
    console.log('completed');
});

//위에건 프로미스를 쓰는거고 밑에거는 async을 하면된다. 
//(async() => {
 //   await ref.set(json);
//        console.log('completed');
//})();


(async() => {
    await ref.set(json);
        console.log('completed');
})();
//async function writeStore(){
//    이건 에로우 함수 안쓰고 
//}
console.log('before completed');

//読み込む 
(async() => {
    const response = await ref.get();
        console.log(response.data());   
        console.log('yomikomi completed');
})();
