import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-check.js";

// Configurando o SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAa3GhWCXH_kS3_9wP8dkJJjPp29qNkaE",
  authDomain: "apptodo-f9de4.firebaseapp.com",
  databaseURL: "https://apptodo-f9de4-default-rtdb.firebaseio.com",
  projectId: "apptodo-f9de4",
  storageBucket: "apptodo-f9de4.appspot.com",
  messagingSenderId: "67184312390",
  appId: "1:67184312390:web:f8e5e1d2d68e5bd324ca47",
  measurementId: "G-RHZZX1WPS2"
};

// Iniciando o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app.name);

//Adicionando ReCaptcha às chamadas de escrita e leitura à base de dados usando o Firebase App Check.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lf6E5EcAAAAAPSwIyNPhbEMsf_QdRBt3exSYFHp'),
  isTokenAutoRefreshEnabled: true
});