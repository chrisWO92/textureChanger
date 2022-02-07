const texture1 = document.querySelector(".texture-1");
const texture2 = document.querySelector(".texture-2");
const texture3 = document.querySelector(".texture-3");
const textureViewer = document.querySelector(".texture-viewer");
const text = document.querySelector(".text");

let backGround1 = `url("/sources/texture-1.jpg")`;
let backGround2 = `url("/sources/texture-2.jpg")`;
let backGround3 = `url("/sources/texture-3.jpg")`;


texture1.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("texture", backGround1);
    text.textContent = `Has seleccionado a Itachi ! <3`;
    text.style.fontSize = `2rem`;
    textureViewer.textContent = "";
});

texture2.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("texture", backGround2);
    text.textContent = `Has seleccionado a Eren ! :S`;
    text.style.fontSize = `2rem`;
    textureViewer.textContent = "";
});

texture3.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("texture", backGround3);
    text.textContent = `Has seleccionado a Goku SSJ4 ! :D`;
    text.style.fontSize = `2rem`;
    textureViewer.textContent = "";
});

textureViewer.addEventListener("dragover", (e) => {
    e.preventDefault();
});

textureViewer.addEventListener("drop", (e) => {
    let data = e.dataTransfer.getData("texture");
    textureViewer.style.backgroundImage = data;
});

/*

Este código se podría optimizar si se usara un for para iterar sobre los 3 divs que tienen las texturas, para asignarle a cada uno la función para cambiar la textura, pero definiendo esa función a parte, fuera del ciclo for, y estableciendo los selectores dependientes del iterador del for, y construidor a través de template strings: `texture-${i}`.

*/