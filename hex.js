const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","D","C","E","F"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[randomNumberGenrator()];
    }
    color.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function randomNumberGenrator() {
    return Math.floor(Math.random() * hex.length);
}
