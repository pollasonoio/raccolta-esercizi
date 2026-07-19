// ============================================================================
// CONFIGURAZIONE FIREBASE — da compilare con i dati del TUO progetto.
// Segui FIREBASE_SETUP.md per crearlo (gratuito, ~10 minuti).
// Dopo aver creato il progetto e l'app web su firebase.google.com/,
// la console ti mostra un blocco "firebaseConfig" identico a questo:
// copia i valori veri al posto dei segnaposto qui sotto.
// ============================================================================
const FIREBASE_CONFIG = {
 apiKey: "AIzaSyC-lXiauVa5lzZAjvxbZ6J51WsbkD0vjxI",
  authDomain: "raccolta-esercizi.firebaseapp.com",
  projectId: "raccolta-esercizi",
  storageBucket: "raccolta-esercizi.firebasestorage.app",
  messagingSenderId: "987204145565",
  appId: "1:987204145565:web:9ee1238d51c2f14203df74"
};

// Non serve modificare altro qui sotto.
var FIREBASE_ENABLED = FIREBASE_CONFIG.apiKey.indexOf("INCOLLA_QUI") === -1;
if(FIREBASE_ENABLED){
  firebase.initializeApp(FIREBASE_CONFIG);
}
