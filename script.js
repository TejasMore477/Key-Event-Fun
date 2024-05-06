const box = document.getElementById("box");

const moveAmount = 12;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    event.preventDefault();

    if (event.key.startsWith("Arrow")) {

        switch (event.key) {
            case "ArrowUp":
                if (y - moveAmount >= 0) {
                    y -= moveAmount;
                }
                break;

            case "ArrowDown":
                if (y + moveAmount + box.offsetHeight <= window.innerHeight) {
                    y += moveAmount;
                }
                break;

            case "ArrowLeft":
                if (x - moveAmount >= 0) {
                    x -= moveAmount;
                }
                break;

            case "ArrowRight":
                if (x + moveAmount + box.offsetWidth <= window.innerWidth) {
                    x += moveAmount;
                }
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