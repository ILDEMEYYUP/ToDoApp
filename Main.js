// ilk
const AddToDoButtonDom = document.getElementById("AddToDoButton");
const ShowToDoAreaDom = document.querySelector("#ToDoShowArea ul");
const DeleteAllToDoButtonDom = document.getElementById("ClearToDoButton");

import { UI } from "./UI.js";


AddToDoButtonDom.addEventListener("click", UI.addTodo);


DeleteAllToDoButtonDom.addEventListener("click", UI.clearTodos);



ShowToDoAreaDom.addEventListener("click", (event) => {
    const clickedButton = event.target;
    if (clickedButton.tagName === "BUTTON") {
        const clickedButtonId = clickedButton.dataset.id;
        if (clickedButton.classList.contains("DeleteToDoButton")) {
            UI.deleteTodo(clickedButtonId);
        } else if (clickedButton.classList.contains("UpdateToDoButton")) {
            UI.updateTodo(clickedButtonId);
        }
    }
});



document.addEventListener("DOMContentLoaded", async () => {
    await UI.displayTodos();
});