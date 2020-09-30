const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
});

// appId: "1:1008213063306:web:a6b4796a69b4e30c75df73",
