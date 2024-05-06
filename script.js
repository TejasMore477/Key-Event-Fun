const box = document.getElementById("box");

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