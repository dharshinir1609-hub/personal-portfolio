const textArray = [
    "Frontend Developer",
    "UI Developer",
    "Web Designer"
];

let index = 0;
let charIndex = 0;

const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 1500;

const typingElement = document.getElementById("typing");

function typeText() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetween);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent =
            textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeText);