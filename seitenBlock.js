// ==UserScript==
// @name         LookPage
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Blocks Specific pages
// @author       Coolie09
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

"use strict"
window.addEventListener("keydown", e => controll(e))
function controll(obj) {
    if (obj.key == "Dead") {
        let pass = checkpasswort();
        if (pass.hasValue) blockpage()
        else createPasswort()
    }
}

function checkpasswort() {
    let zahl = 0;
    let speicherzahl = 0;
        while (zahl <= localStorage.length) {
        if (localStorage.getItem(`master${zahl}`)) {
            speicherzahl++
        } 
            zahl++
    }
    if (speicherzahl > 0) return {hasValue: true, length: speicherzahl}
    return {hasValue: false, length: speicherzahl}
}

function createPasswort() {
    let t = timestamp().toString()
    localStorage.setItem(`master0`, crypt(t, (prompt("Please fill in your passwort!")))+(t));
    alert("Passwort has been created sucsessfully! Please refresh nevertheless the page!");
}

function timestamp() {
    return Date.now()
}

function blockpage() {
    let i = setInterval(() => { 
        document.body.setAttribute("style", "display:none");
        console.clear()
    }, 10)
    let p;
    while (true) { 
        p = prompt("This page has been blocked! Enter the passwort to unlock it!").trim();
        if (checkpass(p.valueOf())) {clearInterval(i); break}
    }
}

function checkpass(txt) {
    console.log((crypt(localStorage.getItem(`master0`).substring(12), txt)+ localStorage.getItem(`master0`).substring(12)) == localStorage.getItem(`master0`))
    if (crypt((localStorage.getItem(`master0`).substring(12)), txt) === localStorage.getItem(`master0`).substring(0,12)) return true
    return false
}

function crypt(salt, text) {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substring(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return text .split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
}

function checkpageblock() {
    let u = checkpasswort().hasValue;
    if (u) blockpage();
    else return true
}
checkpageblock()
