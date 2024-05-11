
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { initialize } from "next/dist/server/lib/render-server";


const firebaseConfig = {
    apiKey: "AIzaSyBZMsO2iUvZUDOVdX8H2GZ4DLBxdKjdK0A",
  
    authDomain: "connect-bcadc.firebaseapp.com",
  
    projectId: "connect-bcadc",
  
    storageBucket: "connect-bcadc.appspot.com",
  
    messagingSenderId: "494690181914",
  
    appId: "1:494690181914:web:da4f7840b919f0aedc02a3",
  
    measurementId: "G-2V2BXVHYLQ"
  
  }
  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);
