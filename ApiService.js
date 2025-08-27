
import { Todo } from "./Todo.js";

export class ApiService 
{
static token;

static async getTodos() 
{
    this.token = localStorage.getItem("authToken");

    if (!this.token) {
        alert("Lütfen giriş yapın.");
        window.location.href = "/login.html";
        return [];
    }

    try {
        const response = await fetch("https://shrimp-capital-lightly.ngrok-free.app/api/Todo/GetAll", {
            headers: {
                "Authorization": `Bearer ${this.token}`,
                'ngrok-skip-browser-warning': 'true',
            }
        });
        
        if (response.status === 401 || response.status === 403) {
            alert("Oturumunuzun süresi doldu. Lütfen tekrar giriş yapın.");
            window.location.href = "/login.html";
            return [];
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP hatası: ${response.status}. Detay: ${errorText}`);
        }        

        const data = await response.json();
        
        //console.log(data);

        return data.$values;

    } catch (error) {
        console.error("Veri alma hatası:", error);
        return [];
    }
}

static async addTodo(todoName) {

    this.token = localStorage.getItem("authToken");
    if (!this.token) {
        alert("Lütfen giriş yapın.");
        window.location.href = "/login.html";
        return null;
    }
    
    const newTodo = new Todo(todoName);

    try {
        const response = await fetch("https://shrimp-capital-lightly.ngrok-free.app/api/Todo/Create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`,
                'ngrok-skip-browser-warning': 'true',
            },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP hatası: ${response.status}. Detay: ${errorText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Todo ekleme hatası:", error);
        return null;
    }
}

static async deleteTodo(todoId) 
{
    this.token = localStorage.getItem("authToken");
    if (!this.token) {
        alert("Lütfen giriş yapın.");
        window.location.href = "/login.html";
        return;
    }

    try {
        const response = await fetch(`https://shrimp-capital-lightly.ngrok-free.app/api/Todo/Delete/${todoId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`,
                'ngrok-skip-browser-warning': 'true',
                
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP hatası: ${response.status}. Detay: ${errorText}`);
        }
        return response.status;
    } catch (error) {
        console.error("Todo silme hatası:", error);
    }
}

static async clearTodos() 
{
    this.token = localStorage.getItem("authToken");
    if (!this.token) {
        alert("Lütfen giriş yapın.");
        window.location.href = "/login.html";
        return;
    }
    
    try {
        const response = await fetch("https://shrimp-capital-lightly.ngrok-free.app/api/Todo/Delete", {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`,
                'ngrok-skip-browser-warning': 'true',
            }
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP hatası: ${response.status}. Detay: ${errorText}`);
        }
        return response.status;
    } catch (error) {
        console.error("Tüm todolar silinirken bir sorun oluştu:", error);
    }
}
}