const box = document.getElementById("box");

const moveAmount = 12;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    event.preventDefault();

    if (event.key.startsWith("Arrow")) {

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown":
                y += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;

            case "ArrowRight":
                x += moveAmount;
                break;

        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    } 
    
    else {
        box.textContent = "🙈";
        box.style.backgroundColor = "red";
    }

});

document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {
        box.textContent = "😲";
        box.style.backgroundColor = "tomato";
    }

});

document.addEventListener("keyup", event => {

    if (event.key.startsWith("Arrow")) {
        box.textContent = "😀";
        box.style.backgroundColor = "lightblue";
    }

});