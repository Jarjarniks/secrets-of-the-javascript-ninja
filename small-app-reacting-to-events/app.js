function addMessage(message, element) {
    let messageElement = document.createElement("li");
    messageElement.textContent = message;
    element.appendChild(messageElement);
}

let first = document.getElementById("first");
addMessage("Page loading", first)

document.body.addEventListener("mousemove", function() {
    let second = document.getElementById("second");
    addMessage("Event: mousemove", second);
});

document.body.addEventListener("click", function() {
    let second = document.getElementById("second");
    addMessage("Event: mouseclick", second)
});