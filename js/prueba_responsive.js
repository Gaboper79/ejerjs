const d = document;

export default function responsiveTester(id) {
  const $form = d.getElementById(id);
  let testerVentana;
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault(); // evito que se recargue la pagina al procesar el form
      testerVentana = window.open(
        $form.direccion.value,
        "testerVentana",
        `width=${$form.ancho.value} ,
        height=${$form.alto.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      testerVentana.close();
    }
  });
}
