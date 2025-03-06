// Aguarda o carregamento do Firebase
document.addEventListener("DOMContentLoaded", function() {
  // Configuração do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDF9jRh9F5WBANaKeAlmeCJUt0urIuHEnI",
    authDomain: "database-vybe.firebaseapp.com",
    projectId: "database-vybe",
    storageBucket: "database-vybe.appspot.com",
    messagingSenderId: "1095806602541",
    appId: "1:1095806602541:web:482061f30a0c1c9e1057a4",
    measurementId: "G-BTJMQXCWZV"
  };
  
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Verifica se a inicialização foi bem-sucedida
  if (firebase.apps.length) {
    console.log("Firebase inicializado com sucesso");
  } else {
    console.error("Erro ao inicializar Firebase");
  }
  
  // Inicializa o Firestore
const db = firebase.firestore();

// Define como variável global
window.db = db;
});
