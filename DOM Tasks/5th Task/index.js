const change = document.getElementById("converter");
const one = document.getElementById("one");
const two = document.getElementById("two");
const val1 = document.getElementById("ip1");
const val2 = document.getElementById("ip2");

change.addEventListener('change',() => {
    if(change.value == "Time"){
        one.innerText = "Minutes";
    two.innerText = "Seconds";
    val2.value = "3600"
    }else {
        one.innerText = "Celsius";
    two.innerText = "Fahrenheit";
    val2.value = "33.8"
    }
})

val1.addEventListener('input',() => {
    if(change.value == "Temprature"){
        val2.value = (Number(val1.value)*33.8) + "";
    }else{

        val2.value = (Number(val1.value)*60) + "";
    }
})

