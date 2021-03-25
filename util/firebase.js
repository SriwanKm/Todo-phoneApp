import firebase from "firebase/app";
import "firebase/database";


if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDaVB41W5cqwI7D1F_DyNOuPY8Bm2n1e2A",
      authDomain: "mytodo-571c2.firebaseapp.com",
      projectId: "mytodo-571c2",
      storageBucket: "mytodo-571c2.appspot.com",
      messagingSenderId: "710525637809",
      appId: "1:710525637809:web:00070d9d332a4343753e90",
      databaseURL: "https://mytodo-571c2-default-rtdb.firebaseio.com/",
    },
  );
} else {
  firebase.app(); // if already initialized, use that one
}



export default firebase;
