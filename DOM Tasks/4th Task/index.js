const target1 = document.getElementById("ip1");
const target2 = document.getElementById("ip2");

target1.addEventListener('input',() => {
    const num = Number(target1.value);
    const result = num*(33.8);

    target2.value = "" + result;
})