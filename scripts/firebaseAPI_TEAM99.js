//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyAhJ59if_i6vp1WNgy1CYDy7WJHBIdnAug",
    authDomain: "comp1800-fbbe4.firebaseapp.com",
    projectId: "comp1800-fbbe4",
    storageBucket: "comp1800-fbbe4.appspot.com",
    messagingSenderId: "362341327525",
    appId: "1:362341327525:web:6329a99e3fd8ebace3e34c"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
