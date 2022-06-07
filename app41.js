const alphabet = ["Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է",
    "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ",
    "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ",
    "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ",
    "Ս", "Վ", "Տ", "Ր", "Ց", "ՈՒ", "Փ",
    "Ք", "և", "Օ", "Ֆ"];

const cell = document.querySelectorAll(".cell");

for (let i = 0; i < alphabet.length; i++) {
    cell[i].append(alphabet[i])
};

for (let i = 0; i < alphabet.length; i++) {
    cell[i].addEventListener("click", function () {
        location.href = "#zeroThree"
    });
}



let keypad = document.getElementById("keypad");

keypad.addEventListener("click", function () { location.href = "#zeroOne"; })

let flag = document.getElementById("flag");

flag.addEventListener("click", function () { window.open("https://play.google.com/store/apps/details?id=com.stdio.alphabetref"); })


let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    else {
        document.body.requestFullscreen();
    }

}, false);
