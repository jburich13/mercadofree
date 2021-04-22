import firebase from "firebase/app";
import "firebase/firestore"


const app = firebase.initializeApp({
    apiKey: "AIzaSyBp85lenLF6jAN6y_kVKn_LANkN04jJnEU",
    authDomain: "mercadofree-5895b.firebaseapp.com",
    projectId: "mercadofree-5895b",
    storageBucket: "mercadofree-5895b.appspot.com",
    messagingSenderId: "190940531665",
    appId: "1:190940531665:web:81b7ebb5a86dc90527aef0",
    measurementId: "G-BG3ZYFGG7G"
})

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}