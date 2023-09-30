const chronometer = document.getElementById('chronometer');
const startPauseButton = document.getElementById('start-pause-button');
const restartButton = document.getElementById('restart-button');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

let [hours, minutes, seconds] = [0, 0, 0];

let timeInterval;
// let chronometerState = 'paused';
let chronometerIsPaused = true;

function assingFormat(unitOfTime){
  return unitOfTime < 10 ? '0' + unitOfTime : unitOfTime;
}

function chronometerUpdate(){
 seconds++;
 
 if (seconds / 60 === 1){
  seconds  = 0;
  minutes++;

  if (minutes / 60 === 1){
    minutes = 0;
    hours++;
  }
 }

 const formatSeconds = assingFormat(seconds);
 const formatMinutes = assingFormat(minutes);
 const formatHours = assingFormat(hours);

 chronometer.innerHTML = `${formatHours}:${formatMinutes}:${formatSeconds}`;
}

startPauseButton.addEventListener('click', function(){
  // if (chronometerState === 'paused'){
    if (chronometerIsPaused){
    timeInterval = window.setInterval(chronometerUpdate, 1000);
    // startPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    // startPauseButton.classList.remove('start');
    // startPauseButton.classList.add('paused');
    // chronometerState = 'initiated';
  }
  else{
    window.clearInterval(timeInterval);
    // startPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';    
    // startPauseButton.classList.remove('paused');
    // startPauseButton.classList.add('start');
    // chronometerState = 'paused';
  }
  chronometerIsPaused = !chronometerIsPaused;
  playIcon.classList.toggle('hide');
  pauseIcon.classList.toggle('hide');
  startPauseButton.classList.toggle('start');
  startPauseButton.classList.toggle('paused')
});

restartButton.addEventListener('click', function(){
  window.clearInterval(timeInterval);

  hours = 0;
  minutes = 0;
  seconds = 0;

  chronometer.innerHTML = '00:00:00';

  // startPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
  playIcon.classList.remove('hide');
  pauseIcon.classList.add('hide');
  startPauseButton.classList.remove('paused');
  startPauseButton.classList.add('start');
  // chronometerState = 'paused';
  chronometerIsPaused = true;
});
