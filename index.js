// Audio elements

const crash = new Audio("sounds/crash.mp3");
const kick = new Audio("sounds/kick-bass.mp3");
const snare = new Audio("sounds/snare.mp3");
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");

// Event listener for clicks on the Drum kits
document.querySelector(".set").addEventListener("click", function (e) {
    // Listener function works only for the BUTTON tag
    if (e.target.tagName === "BUTTON") {
        switch (e.target.textContent) {
            case "w":
                crash.play();
                break;
            case "a":
                kick.play();
                break;
            case "s":
                snare.play();
                break;
            case "d":
                tom1.play();
                break;
            case "j":
                tom2.play();
                break;
            case "k":
                tom3.play();
                break;
            // If none of them mathces then it's obviously "l"
            default:
                tom4.play();
        }
    }
});

// Event listener for keyboard Events

document.body.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "w":
            crash.play();
            break;
        case "a":
            kick.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "l":
            tom4.play();
            break;
        // For keyboards any keys can be pressed
        // thats why defualt comes into action unlike previous switch statement
        default:
            alert(`Unknown Key(${e.key.toUpperCase()}) Pressed 💀`);
    }
});
