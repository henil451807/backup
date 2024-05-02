// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA62Ruvha_0iGP4iz6tIlxTWOWIXqe55eU",
    authDomain: "quoraclone-60130.firebaseapp.com",
    projectId: "quoraclone-60130",
    storageBucket: "quoraclone-60130.appspot.com",
    messagingSenderId: "67399599088",
    appId: "1:67399599088:web:f7098113d7458757181335"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const faceBookProvider = new firebase.auth.FacebookAuthProvider()

const db = firebaseApp.firestore()

export {auth , provider, faceBookProvider}

export default db