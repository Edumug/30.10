import { database } from "./firebase.js";

import { ref, get, push, remove } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

const tarefa = document.getElementById("tarefa");
const add = document.getElementById("add");
const lista = document.getElementById("lista");

function addTarefa() {
    const tarefaValue = tarefa.value;
    push(ref(database, "tarefas"), {
        tarefa: tarefaValue
    });
    tarefa.value = "";
    tarefac();
}

function  tarefac() {
    get(ref(database, "tarefas")).then((snapshot) => {
        lista.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            const li = document.createElement("li");
            li.innerHTML = `<span>${childData.tarefa} <button class="delete" data-id="${childSnapshot.key}">X</button></span>`;
            lista.appendChild(li);
            li.querySelector(".delete").addEventListener("click", function() {
                const id = this.getAttribute("data-id");
                remove(ref(database, "tarefas/" + id));
                li.remove();
            });
        });
    });
}


add.addEventListener("click", function() {
    addTarefa();
});

tarefac();