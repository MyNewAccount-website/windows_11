const button_info = document.querySelector(".info_text");
const info_text = document.querySelector(".describe_text");
const eye_icon = document.querySelector(".eye_icon");
const input_login = document.querySelector(".inputLogin");
const input_password = document.querySelector(".inputPassword");

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
        border: 1px solid rgba(0, 90, 209, 0.865);
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
        border: 1px solid rgba(0, 90, 209, 0.865);
        border-bottom: 2px solid rgb(0, 186, 219);
        padding: 9px 40px 9px 12px;
        width: 100%;
        border-radius: 5px;
        color: whitesmoke;
        outline: none;
        transition: background-color 0.2s, border 0.2s;
    `;
})

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
