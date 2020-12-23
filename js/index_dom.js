import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClok, alarm } from "./reloj.js";
import { moveBall, shorcuts } from "./teclado.js";
import { cuentaRegresiva } from "./cuentaRegresiva.js";
import btnScrollTop from "./btnScroll.js";
import darktheme from "./tema-oscuro.js";
import responsiveMedia from "./objeto_responsivo.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceinfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_Red.js";
import webcam from "./camara_web.js";
import getGeoloc from "./geolocalizacion.js";
import searchFilter from "./busqueda_filtro.js";
import sorteo from "./sorteo.js";
import slider from "./carrusel.js";
const d = document;
let t;
const $reloj = d.getElementById("visor-reloj");

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClok("#visor-reloj", "#muestra-reloj", "#oculta-reloj");
  alarm(
    "/javascript/johnMircha/ejerciciosDom/assets/campana.mp3",
    "#inicia-alarma",
    "#detiene-alarma"
  );
  cuentaRegresiva(
    "cuentaRegresiva",
    "2021-01-17 00:00:00",
    "Felices Vacacionessss!! 🎄"
  );
  btnScrollTop(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",

    `<a href="https://www.youtube.com/watch?v=57fKwlZLaK8" target="_blank rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/57fKwlZLaK8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/WPHsUeyQZgngovhF8" target="_blank rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12980.652435933735!2d-59.67191071705312!3d-35.57436573350767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bde7fbdeb44cf5%3A0xabf24410527ef5f7!2sCaz%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1608145881074!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceinfo("user-device");
  webcam("webcam");
  getGeoloc("geolocation");
  searchFilter(".cards-filter", ".card");
  sorteo("#sorteoBtn", ".participantes");
  slider();
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

darktheme(".dark-theme-btn", "dark-mode");
networkStatus();
