// Event listener for clicks on the Drum kits
// Leveraging Event Delegation
document.querySelector(".set").addEventListener("click", function ({ target }) {
    // Listener function works only for the BUTTON element
    if (target.tagName === "BUTTON") {
        const key = target.textContent;
        makeSound(key);
        addAnimation(key);
    }
});

// Event listener for keyboard Events
document.addEventListener("keydown", function ({ key }) {
    makeSound(key);
    addAnimation(key);
});

// Making sound based on keys/chars
function makeSound(key) {
    switch (key) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        // If it reaches to the default, then it's surely for the keyboard event
        default:
            alert(`Unknown Key(${key.toUpperCase()}) Pressed 💀!`);
    }
}

// Adding styles based on keys/chars
function addAnimation(key) {
    const activeBtn = document.querySelector(`.${key}`);
    activeBtn.classList.add("pressed");

    // Remove the "pressed" class after 200 milliseconds
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 200);
}
