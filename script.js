function showMessage() { 
    alert("Hello! Welcome to my website."); 
    }

function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to my website!"
}

function changeBgColor() {
        let color = document.getElementById("ColorInput").value;
        document.body.style.changeBgColor = color;
    }
function checkAge() {
    let age = document.getElementById("ageInput").value;
    if (age>= 18) {
        alert("you are and adult");
    } else {
        alert("you are not adult");
    }
}

function zoomIn(img) {
    img.style.transform = "scale(1.2)";
}
function zoomOut(img) {
    img.style.transform = "scale(1)";
}