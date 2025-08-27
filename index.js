const emailInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const signupButton = document.getElementById("signup");

loginButton.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        return;
    }

    try {
        const response = await fetch("https://shrimp-capital-lightly.ngrok-free.app/api/HomePage/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",'ngrok-skip-browser-warning': 'true',
            },

            body: JSON.stringify({ Email: email, Password: password }),
            credentials: "omit"
        });

        if (!response.ok) {
            throw new Error("Giriş başarısız");
        }

        const data = await response.json();
        const token = data.token;
        console.log(data);

        localStorage.setItem("authToken", token);
        console.log("Token:", token);

        window.location.href = "/Main.html";
        
    } catch (error) {
        console.error(error);
        alert("Sunucu hatası veya bağlantı sorunu.");
    }
});

signupButton.addEventListener("click", () => {
    window.location.href = "/signup.html";
});