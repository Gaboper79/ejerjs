const d = document;
export function digitalClok(clock, btnPlay, btnStop) {
  let t;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      t = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(t);
      d.querySelector(clock).innerHTML = null;

      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(song, btnPlay, btnStop) {
  let alarmatemp;
  const $alarm = d.createElement("audio");
  $alarm.src = song;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmatemp = setTimeout(() => {
        $alarm.play();
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmatemp);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
