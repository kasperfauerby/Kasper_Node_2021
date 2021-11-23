

function sendContactMessage() {
    console.log("send")
fetch("api/contact", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify ({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    })
}).then(response => {
    if (response.status === 200) {
        console.log("everything is ok")
    } else {
        console.log("Error sending", response.status)
    }
});

}

document.getElementById("contact-button").addEventListener("click", sendContactMessage)