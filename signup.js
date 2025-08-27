document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", async () => {
        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !surname || !email || !password) {
            alert("Tüm alanlar doldurulmalı!");
            return;
        }

        try {
            const response = await fetch("https://shrimp-capital-lightly.ngrok-free.app/api/HomePage/Signup", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({Name: name, Surname: surname,Email: email, Password: password })
            });

            if (!response.ok) {
                throw new Error("Kayıt başarısız");
            }

            const data = await response.json();
            const token = data.Token;

      
            localStorage.setItem("authToken", token);

            alert("Kayıt başarılı! Token kaydedildi.");
            console.log("Token:", token);

            
            window.location.href = "/Main.html";
            
        } catch (error) {
            console.error(error);
            alert("Sunucu hatası veya bağlantı sorunu.");
        }
    });
});
