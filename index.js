const socket = new WebSocket("ws://localhost:8080");

const formElement = document.getElementById("form");
const messagesElement = document.getElementById("messages");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const nickname = event.target.nickname.value.trim();
    const message = event.target.message.value.trim();

    if (nickname === "" || message === "") {
        return;
    }
 
    writLine(`${nickname} : ${message}`);

    formElement.reset();
});

function writLine(text) {
   const line = document.createElement("p");
    line.innerText = text;
    messagesElement.appendChild(line);
}