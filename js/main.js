let getDials = document.querySelector(".dials")
let cloneDials = getDials.cloneNode(true)
cloneDials.style.transform = "rotate(90deg)";
let printClone = document.querySelector(".analog_clock").appendChild(cloneDials)

const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function clock() {
//Get the time
 const now = new Date()
 let seconds = now.getSeconds();
 let minutes = now.getMinutes();
 let hours = now.getHours();

 //Analog Clock
 const secondsDegrees = (seconds / 60) * 360
 const minutesDegrees = (minutes / 60) * 360
 const hoursDegrees = (hours / 12* 360) + minutes * .5

 secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
 minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
 hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

 //Digital Clock
 const digitalClock = document.querySelector(".digital_clock")

   if (minutes < 10) {minutes = "0" + minutes}
   if (seconds < 10) {seconds = "0" + seconds}
   if (hours < 10) {hours = "0" + hours}

  let digitalHour = hours + ":" + minutes + ":" + seconds
  digitalClock.innerHTML = digitalHour
}

setInterval(clock, 1000)
