window.addEventListener("load", init)
var muvjel = ""
function ID(elem) {
    return document.getElementById(elem)
}
function $(elem) {
    return document.querySelectorAll(elem) //tömb
}
function $1(elem) {
    return document.querySelector(elem) //ha egy van belőle
}
function Class(elem) {
    return document.getElementsByClassName(elem) // ez is tömb lesz
}
function init() {
    szamGombok()
    gombKattintas()
}
function szamGombok() {
    var txt = ""
    for (let i = 0; i < 10; i++) {
        txt += `<button class="szam">${i}</button>`
    }
    Class("szamok")[0].innerHTML = txt
}
function gombKattintas() {
    var szamGombok = $("button")
    for (let i = 0; i < szamGombok.length; i++) {
        if (szamGombok[i].innerHTML === "C") {
            szamGombok[i].addEventListener("click", torol)
        }
        else if (szamGombok[i].innerHTML === "=") {
            szamGombok[i].addEventListener("click", eredmenytKiir)
        }
        else if (szamGombok[i].innerHTML === "*" || szamGombok[i].innerHTML === "/" || szamGombok[i].innerHTML === "+" || szamGombok[i].innerHTML === "-" || szamGombok[i].innerHTML === ".") {
            szamGombok[i].addEventListener("click", muveletetKiir)
        } else {
            szamGombok[i].addEventListener("click", szamotKiir)
        }
    }
}
function szamotKiir() {
    if (!(Class("kifejezes")[0].innerHTML.includes("="))) {
        Class("kifejezes")[0].innerHTML += event.target.innerHTML
    }
    else {
        alert("már megnyomtad az egyenlőség jelet, ha mást szeretnél számolni, nyomd meg a 'C' betűt")
    }
}

function muveletetKiir() {
    if (!(Class("kifejezes")[0].innerHTML == "")) {
        muvjel = event.target.innerHTML
        Class("kifejezes")[0].innerHTML += event.target.innerHTML
    } else {
        alert("nincs szám a kijelzőn")
    }

}
function torol() {
    Class("kifejezes")[0].innerHTML = ""
    Class("eredmeny")[0].innerHTML = ""
}
function eredmenytKiir() {
    var muveletTomb = Class("kifejezes")[0].innerHTML.split(muvjel)
    console.log(muveletTomb)
    console.log(muvjel)
    var eredmeny = 0
    switch (muvjel) {
        case "+":
            eredmeny = Number(muveletTomb[0]) + Number(muveletTomb[1])
            break;
        case "-":
            eredmeny = Number(muveletTomb[0]) - Number(muveletTomb[1])
            break;
        case "*":
            eredmeny = Number(muveletTomb[0]) * Number(muveletTomb[1])
            break;
        case "/":
            eredmeny = Number(muveletTomb[0]) / Number(muveletTomb[1])
            break;
        default:
            break;
    }
    Class("eredmeny")[0].innerHTML = eredmeny
    if (!(Class("kifejezes")[0].innerHTML == "") && !(Class("kifejezes")[0].innerHTML.includes("="))) {
        Class("kifejezes")[0].innerHTML += "="
    }
}