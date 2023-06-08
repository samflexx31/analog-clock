const hourEL = document.querySelector(".hour");
const minutesEL = document.querySelector(".minutes");
const secondEL = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  hourEL.style.transform = `rotate(${hourDeg}deg)`;
  const minutesDeg = (minutes / 60) * 360;
  minutesEL.style.transform = `rotate(${minutesDeg}deg)`;
  const secondDeg = (seconds / 60) * 360;
  secondEL.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
