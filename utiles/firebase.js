import firebase from "firebase";

var config = {
    apiKey: "AIzaSyCV5i-_qV-3f9wuefXB7EmZOGsY8v-hUHs",
    authDomain: "nuxtapp-25c01.firebaseapp.com",
    databaseURL: "https://nuxtapp-25c01.firebaseio.com",
    projectId: "nuxtapp-25c01",
    storageBucket: "nuxtapp-25c01.appspot.com",
    messagingSenderId: "848679817126"
  };
  firebase.initializeApp(config);

  export default firebase; //show configured firebase to public