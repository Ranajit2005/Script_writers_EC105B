
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRHNFPt3-RzLpLE3BtmrEaNTgWtnzk1g4",
    authDomain: "database1-b27c6.firebaseapp.com",
    projectId: "database1-b27c6",
    storageBucket: "database1-b27c6.appspot.com",
    messagingSenderId: "306088001178",
    appId: "1:306088001178:web:7d7fc1041e2fb23f046923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

//log in part
const truesignin = document.querySelector('#truesignin');
truesignin.addEventListener('click', function (e) {

    e.preventDefault();

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            alert('succesfully logeged in , will be redirected to homepage');
            setTimeout(() => {

                window.location.href = "../index.html";
            }, 600)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});




