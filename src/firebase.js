import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAz_kjVkTHwWnblpEtKfQ8BmmebHeTOa34",
    authDomain: "whatsapp-clone-7310d.firebaseapp.com",
    projectId: "whatsapp-clone-7310d",
    storageBucket: "whatsapp-clone-7310d.appspot.com",
    messagingSenderId: "346904842624",
    appId: "1:346904842624:web:1d730c4fd418c6e114f165",
    measurementId: "G-JNT1PHR770"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;