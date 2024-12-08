const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const zero = document.getElementById("zero");
const hideShow = document.getElementById("odiv");

function minusHandler() {
    zero.innerText = (Number(zero.innerText)-1) + "";
}

function plusHandler() {
    zero.innerText = (Number(zero.innerText)+1) + "";
}

function newHandler() {
    hideShow.style.display = "flex";
}