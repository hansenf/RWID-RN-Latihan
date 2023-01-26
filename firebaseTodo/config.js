import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVsD9BaUtzw_yrzgu52WyOH2IvwI0PeCo",
    authDomain: "testapp-1c7c9.firebaseapp.com",
    projectId: "testapp-1c7c9",
    storageBucket: "testapp-1c7c9.appspot.com",
    messagingSenderId: "841224995960",
    appId: "1:841224995960:web:52ee27b886dfeb5430598d",
    measurementId: "G-52KN3K7040"
    };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };