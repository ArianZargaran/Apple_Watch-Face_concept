const secondsHand = document.querySelector('.seconds-hand')
const minutesHand = document.querySelector('.minutes-hand')
const hoursHand = document.querySelector('.hours-hand')
const digitalClock = document.querySelector('.digital_clock')

function analogClock() {
 const now = new Date()
 let seconds = now.getSeconds();
 let minutes = now.getMinutes();
 let hours = now.getHours();

 const secondsDegrees = (seconds / 60) * 360
 const minutesDegrees = (minutes / 60) * 360
 const hoursDegrees = (hours / 12) * 360

 secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
 minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
 hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

   if (minutes < 10) {minutes = "0" + minutes}
   if (seconds < 10) {seconds = "0" + seconds}
   if (hours < 10) {hours = "0" + hours}

  let digitalHour = hours + ":" + minutes + ":" + seconds
  digitalClock.innerHTML = digitalHour
}

setInterval(analogClock, 1000)
