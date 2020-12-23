const d = document;
export function cuentaRegresiva(visor, fechaFin, mensaje) {
  const $visor = d.getElementById(visor),
    cuentaRegresiva = new Date(fechaFin).getTime();

  let cuentaRegreTiempo = setInterval(() => {
    let ahora = new Date().getTime(),
      fechalimite = cuentaRegresiva - ahora,
      dias = Math.floor(fechalimite / (1000 * 60 * 60 * 24)),
      horas = (
        "0" +
        Math.floor((fechalimite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutos = (
        "0" + Math.floor((fechalimite % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      segundos = ("0" + Math.floor((fechalimite % (1000 * 60)) / 1000)).slice(
        -2
      );

    $visor.innerHTML = `<h3>Faltan:${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos para navidad 🎄</h3>`;
  }, 1000);

  //let anoNuevo = Date("2020/12/31 00:00:00");
  //let fecha = moment("2020/12/31 00:00:00").fromNow();
  //
}
