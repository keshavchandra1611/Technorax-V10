// Count Down JS Code Begins
const btn = document.querySelector(".up-downBall");
const bar = document.querySelector("#countDown");
const clockBtn = document.querySelector('#HourGlassIcon');

btn.addEventListener("click", () => {
  bar.classList.toggle(`countDownInvisible`);

  btn.classList.toggle(`up-downBallInvisible`);

  clockBtn.classList.add(`HourGlassIconInvisible`);
});

clockBtn.addEventListener('click', ()=>{
  bar.classList.toggle(`countDownInvisible`);
  btn.classList.toggle(`up-downBallInvisible`);
  clockBtn.classList.remove(`HourGlassIconInvisible`);

})



const DayTime = document.querySelector(`.DayTime`);
const HourTime = document.querySelector(`.HourTime`);
const MinTime = document.querySelector(`.MinTime`);
const SecTime = document.querySelector(`.SecTime`);

function updateCountDown() {
  const currentTime = new Date();


  // Event Date to be added here
  const HackDate = new Date(`October 14 2024 09:00:00`);

  const timeLeft = HackDate - currentTime;
  console.log(timeLeft);
  // console.log(currentTime);

  const d = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  const h = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  const m = Math.floor(timeLeft / 1000 / 60) % 60;
  const s = Math.floor(timeLeft / 1000)%60;

  if (timeLeft>=0){
    // console.log(Hello);
    DayTime.innerHTML= d + " Days";
  HourTime.innerHTML= h + " Hrs";
  MinTime.innerHTML= m + " Mins";
  SecTime.innerHTML= s + " Secs";
  }
}

setInterval(updateCountDown,1000);
// Count Down JS Code Ends