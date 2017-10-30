// var ramIntegers = Math.floor(Math.random()* 20);

const digitalUI = document.querySelector('.digitalUI')

function finalWatch() {

const basis = new Date();

const h = basis.getHours()
let m = basis.getMinutes()
let s = basis.getSeconds()

if (m < 10) {m = '0' + basis.getMinutes() }
if (s < 10) {s = '0' + basis.getSeconds() }

let hour = h + ":" + m + ":" + s
digitalUI.innerHTML = hour
}
setInterval(finalWatch, 1000);
