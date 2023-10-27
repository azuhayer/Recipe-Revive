// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCnj06f8uC1TVGr9ikripY_FY_LpnpQ4vA",

  authDomain: "recipe-revive-ca25f.firebaseapp.com",

  projectId: "recipe-revive-ca25f",

  storageBucket: "recipe-revive-ca25f.appspot.com",

  messagingSenderId: "109521730172",

  appId: "1:109521730172:web:36a418d45700b7e7b4a7f9",

  measurementId: "G-CR41022THZ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);