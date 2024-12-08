const first = document.querySelectorAll("#first>li");
const second = document.querySelectorAll("#second>li");

function btnHandler() {
    const dummy1 = first[0].innerText;
    const dummy2 = first[1].innerText;
    first[0].innerText = second[0].innerText;
    first[1].innerText = second[1].innerText;
    second[0].innerText = dummy1
    second[1].innerText = dummy2

}