import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlwWyu4uYqFQ_2tOqLG76VcBn7R8Bd6lw",
  authDomain: "rotina2210.firebaseapp.com",
  databaseURL: "https://rotina2210-default-rtdb.firebaseio.com",
  projectId: "rotina2210",
  storageBucket: "rotina2210.firebasestorage.app",
  messagingSenderId: "809457816578",
  appId: "1:809457816578:web:09c61415f481487370c31b"
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

