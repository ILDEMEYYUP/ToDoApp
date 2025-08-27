import { ApiService } from "./ApiService.js";

const AddToDoInputDom = document.getElementById("TodoAddInput");

const ShowToDoAreaDom = document.querySelector("#ToDoShowArea ul");

export class UI {

static async addTodo() 
{
    const newTodoName = AddToDoInputDom.value.trim();

    if (newTodoName === "") {
        return;
    }
    
    await ApiService.addTodo(newTodoName);
    UI.clearInput();
    await UI.displayTodos();

}

static async deleteTodo(todoId) 
{
    await ApiService.deleteTodo(todoId);
    await UI.displayTodos();
}

static async updateTodo(todoId) 
{
    /// ayarlanacak
    alert("Güncelleme fonksiyonu henüz aktif değil.");
}

static async displayTodos() 
{
    ShowToDoAreaDom.innerHTML = "";
    const todos = await ApiService.getTodos();

    if (todos.length !=null) {
        todos.forEach(item => {
            const result = document.createElement("li");
            
            const status = item.IsCompleted ? "Done" : "Not done"; 

            result.innerHTML = `
                <span>${item.title} --------> ${status}
                    <button class="UpdateToDoButton" data-id="${item.id}">Update</button>
                    <button class="DeleteToDoButton" data-id="${item.id}">Delete</button>
                </span>
            `;

            ShowToDoAreaDom.appendChild(result);
        });
    }
}

static async clearTodos() 
{
    await ApiService.clearTodos();
    alert("Tüm todolar silindi!");
    await UI.displayTodos();
}


static clearInput() 
{
    AddToDoInputDom.value = "";
}

}