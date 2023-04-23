import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2KylwrLOXF4nJETqcIlVgoaLf5nuIrh4",
  authDomain: "scalable-studio-pro.firebaseapp.com",
  projectId: "scalable-studio-pro",
  storageBucket: "scalable-studio-pro.appspot.com",
  messagingSenderId: "578056650621",
  appId: "1:578056650621:web:e80c6b99d15918e17b5614",
  measurementId: "G-P6F5QXR2DY",
};

const firebaseApp = initializeApp(firebaseConfig);
export default (context, inject) => {
  inject("firebase", firebaseApp);
};
