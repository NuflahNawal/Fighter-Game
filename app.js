var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left = 0;
var right = 0; 

function animateChar(event) {
    console.log("Key pressed:", event.keyCode);

    // Move Right (F key)
    if (event.keyCode == 70 && left < 1200) {
        left = left + 15;
        char1.style.left = left + "px";
        char1.style.transform = "scaleX(1)";
        char1.src = "https://www.fightersgeneration.com/characters/alicewf.gif";
        setTimeout(() => {
            char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif";
        }, 1000);
    }

    // Move Left (A key)
    if (event.keyCode == 65 && left > 10) {
        left = left - 15;
        char1.style.left = left + "px";
        char1.style.transform = "scaleX(-1)";
        char1.src = "https://www.fightersgeneration.com/characters/alicewf.gif";
        setTimeout(() => {
            char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif";
        }, 1000);
    }

    // Attack (E key)
    if (event.keyCode == 69) {
        char1.src = "https://www.fightersgeneration.com/characters/alice12.gif";
        char1.style.height = "250px";
        setTimeout(() => {
            char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif";
            char1.style.height = "200px";
        }, 2500);
    }

// CHARACTOR 2 STYLING

    // Move Forward (J key)
    if (event.keyCode == 74 && right < 1200) {
        right = right + 15;
        char2.style.right = right + "px";
        char2.style.transform = "scaleX(-1)"; 
        char2.src = "https://www.fightersgeneration.com/nf7/char/hibki-blazblue-walkforward.gif";
        setTimeout(() => {
            char2.src = "https://www.fightersgeneration.com/nf8/char2/hibiki-blazblue-write.gif";
        }, 1000);
    }

    // Move Backward (L key)
    if (event.keyCode == 76 && right > 10) {
        right = right - 15;
        char2.style.right = right + "px";
        char2.style.transform = "scaleX(1)"; 
        char2.src = "https://www.fightersgeneration.com/nf7/char/hibki-blazblue-walkforward.gif";
        setTimeout(() => {
            char2.src = "https://www.fightersgeneration.com/nf8/char2/hibiki-blazblue-write.gif";
        }, 1000);
    }

    // Attack (I key)
    if (event.keyCode == 73) {
        char2.style.transform = "scalex(-1)"; 
        char2.src = "https://www.fightersgeneration.com/nf7/char/hibiki-blazblue-shadow.gif";
        setTimeout(() => {
            char2.src = "https://www.fightersgeneration.com/nf7/char/hibiki-blazblue-shadow.gif";
        }, 2500);
    }
}

window.addEventListener("keydown", animateChar);