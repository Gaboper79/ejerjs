const d = document;
let x = 0,
  y = 0;
export function shorcuts(e) {
  /* console.log(e);
  console.log(e.type);
  console.log(e.keyCode);
  console.log(e.key);

  console.log(e.altKey); */

  if (e.key === "a" && e.altKey) {
    alert("haz lanzado una alerta");
  }
  if (e.key === "p" && e.altKey) {
    prompt("haz lanzado un prompt");
  }

  if (e.key === "c" && e.altKey) {
    confirm("haz lanzado una confirmacion");
  }
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  console.log();
  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitBall.left > limitStage.left + 6) x--;
      break;
    case 38:
      e.preventDefault();
      if (limitBall.top > limitStage.top + 6) y--;
      break;
    case 39:
      e.preventDefault();
      if (limitBall.right < limitStage.right - 10) x++;
      break;
    case 40:
      e.preventDefault();
      if (limitBall.bottom + 10 < limitStage.bottom) y++;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
