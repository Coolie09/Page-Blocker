// ==UserScript==
// @name         LookPage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Coolie09
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

"use strict"

console.log(localStorage);
const buchstabenArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const blockedPages = []
let gesperrt = false;
    window.addEventListener("keydown", e => {
        if (e.key == "Dead") {

            let zahl = 0;
            let speicherzahl = 0;
            while (zahl <= localStorage.length) {
                if (localStorage.getItem(`page${zahl.toString()}`)) {
                    speicherzahl++
                }
                console.log("Hier!");
                zahl++

            }

            if (speicherzahl === 0) {
                localStorage.setItem(`page${speicherzahl}`,  crypt(crypt("InternetExplorer38", random()) ,prompt("PWD-EINGEBEN! NICHT VERÄNDERBAR! Mind. 10 Zeichen!")))
            } else {
                localStorage.setItem(`page${speicherzahl}`,  crypt(crypt("InternetExplorer38", random()) ,prompt("Welche Seite möchten Sie sperren? Bitte eine ganze URL angeben!", "Bspw. https://www.google.de")))
                console.log(localStorage.length)
                console.log(localStorage.getItem(`page${speicherzahl}`))
            }

        } else if (e.key === "Tab" && gesperrt)  {
            let isTrue = false;
            while (!isTrue) {
                let gzl = prompt("PWD-EINGEBEN!")
                console.log(gzl);
                if (localStorage.getItem(`page0`) == crypt(localStorage.getItem(`keyNum0`),gzl)) {
                    document.body.removeAttribute("style")
                    !isTrue
                    clearInterval(itv)
                    !gesperrt
                }
            }

        } else { console.log("PEACE")}

    })

    function check() {
        let copy = 0;
    while (copy <= localStorage.length) {
        // alert("Hier 2")
        if (localStorage.getItem(`keyNum${copy}`)) {
        let c = crypt(localStorage.getItem(`keyNum${copy}`), document.URL)
        console.log(c);
        console.log(localStorage.getItem(`page${copy.toString()}`))
        if (localStorage.getItem(`page${copy.toString()}`) == c) {
            console.log(c)
            console.log(document.URL);
            console.log(localStorage.getItem(`keyNum${copy}`));
            document.body.setAttribute("style", "display:none")
            gesperrt = true;
            let itv = setInterval(tm(), 200)
            let cnsl = setInterval(cnl(), 50)

        }



    }
        copy++
    }
}

function tm() {
     document.body.setAttribute("style", "display:none")
}

function cnl() {
    console.clear();
}



function random() {
    let zuff = [];
    let num = 0;
    let numz = 0;
    for (let i = 0; i < 10; i++) {
        zuff.push(Math.random() * (buchstabenArray.length - 1) + 1)
    }

    while (num <= localStorage.length) {
        if (localStorage.getItem(`keyNum${num}`)) {
            numz++
        }
        console.log("Hier!");
        num++


    }

    localStorage.setItem(`keyNum${numz.toString()}`, crypt("InternetExplorer38", zuff.join("") ))
    return zuff.join("")

}


const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
}
check()