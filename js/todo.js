const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delectToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function doneToDo(event){
    const liDone = event.target.previousSibling;
    liDone.classList.add("tododone");
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "✂";
    button.addEventListener("click", delectToDo);
    const buttonTwo = document.createElement("button");
    buttonTwo.innerText = "✔";
    buttonTwo.addEventListener("click", doneToDo);
    li.appendChild(span);
    li.appendChild(buttonTwo);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const toDosObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(toDosObj);
    paintToDo(toDosObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
