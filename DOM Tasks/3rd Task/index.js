const target1 = document.getElementById("ip1");
const target2 = document.getElementById("ip2");
const target3 = document.getElementById("para");

target1.addEventListener('input',() => {
    const num = Number(target1.value);
    const num2 = Number(target2.value);
    const result = num*num2;
    const finalResult = "" + result;

    target3.innerText = finalResult;
})

target2.addEventListener('input',() => {
    const num = Number(target1.value);
    const num2 = Number(target2.value);
    const result = num*num2;
    const finalResult = "" + result;

    target3.innerText = finalResult;
})
