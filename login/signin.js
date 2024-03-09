
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// console.log(app);
//creating account
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
// const truesignup = document.querySelector('#truesignup');
// truesignup.addEventListener('click', function (event) {

//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             // ...
//             alert('account creation succesfull...you will be redirected to the homepage');
//             setTimeout(() => {
//                 window.location.href = "../index.html";
//             }, 600)
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });
// });

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


