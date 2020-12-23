const d = document;
export default function sorteo(btn, selector) {
  const obtenerGanador = (participantes) => {
    //console.log(listParticipantes);
    let ganadorID = Math.floor(Math.random() * participantes);
    //console.log(ganadorID);
    //d.getElementById(ganadorID).style.backgroundColor = "red";
    return ganadorID;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const listParticipantes = d.querySelectorAll(selector);
      let ganador = obtenerGanador(listParticipantes.length);

      listParticipantes.forEach((el) => {
        console.log(el.id);
        el === listParticipantes[ganador]
          ? el.classList.add("ganador")
          : el.classList.remove("ganador");
      });
    }
  });
}
