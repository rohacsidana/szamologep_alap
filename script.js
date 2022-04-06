window.addEventListener("load", init)
var mivjel = ""
var egyenlo = false
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
    console.log("belep")
    var szamGombok = $("button")
    console.log(szamGombok)
    for (let i = 0; i < szamGombok.length; i++) {
        if (szamGombok[i].innerHTML === "C") {
            szamGombok[i].addEventListener("click", torol)
        }
        else if (szamGombok[i].innerHTML === "=") {
            szamGombok[i].addEventListener("click", kijelzoreIr)
            szamGombok[i].addEventListener("click", eredmenytKiir)
            egyenlo = true

        } else {
            szamGombok[i].addEventListener("click", kijelzoreIr)
            if (szamGombok[i].innerHTML === "*" || szamGombok[i].innerHTML === "/" || szamGombok[i].innerHTML === "+" || szamGombok[i].innerHTML === "-") {
                muvjel = szamGombok[i].innerHTML
            }
        }
    }
}

function kijelzoreIr() {
    Class("kifejezes")[0].innerHTML += event.target.innerHTML
}
function torol() {
    Class("kifejezes")[0].innerHTML = ""
}
function eredmenytKiir() {

}