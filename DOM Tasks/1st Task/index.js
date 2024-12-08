const opelem = document.getElementById("op");
const targetelem = document.getElementById("target");

targetelem.addEventListener('input',() => {
    opelem.innerText = targetelem.value;
})