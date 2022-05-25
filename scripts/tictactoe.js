const symbols = ["○", "×"];
const size = 3 * 3
var curSymbol = 0;
var objs = []

function switchSymbol() {
    curSymbol = (curSymbol + 1) % symbols.length;
}

function turn(obj) {
    if (obj.innerHTML === "") {
        obj.innerHTML = symbols[curSymbol];
        switchSymbol();
    }
    check
}

function initPlayspace() {
    for (var i = 0; i < size; i++) {
        objs.push(document.getElementById(String(i)));
    }
}