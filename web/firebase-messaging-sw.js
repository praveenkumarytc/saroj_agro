importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBa4HGKRIPl25grMkEoj-Fzl5vbQWyS39g",
  authDomain: "ekal-4c5fd.firebaseapp.com",
  projectId: "ekal-4c5fd",
  storageBucket: "ekal-4c5fd.appspot.com",
  messagingSenderId: "144318179109",
  appId: "1:144318179109:web:071b3e7a8a705c99e21ccc",
  measurementId: "G-8DBK6XLCPY"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});