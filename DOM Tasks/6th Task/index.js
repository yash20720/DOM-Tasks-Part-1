function changer() {
    const rval = document.getElementById("redno").value;
    const gval = document.getElementById("greenno").value;
    const bval = document.getElementById("blueno").value;

    document.getElementById("resultdiv").style.backgroundColor = `rgb(${rval},${gval},${bval})`
}


function rhandler(val) {
    document.getElementById("redno").value = val;
    changer();
}

function ghandler(val) {
    document.getElementById("greenno").value = val;
    changer();
}

function bhandler(val) {
    document.getElementById("blueno").value = val;
    changer();
}