const d = document,
  n = navigator;
export default function getGeoloc(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    $id.innerHTML = `<p>Tu posicion actuales:</p>
    <ul>
        <li>Latitud:<b>${coords.latitude}</b></li>
        <li>Longitud:<b>${coords.longitude}</b></li>
        <li>precidion:<b>${coords.accuracy} metros</b></li>
        
        
        
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},19z"target="_blank" rel="noopener">Ver en google maps</a>
    `;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(position);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
