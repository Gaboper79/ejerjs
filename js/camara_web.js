const d = document,
  n = navigator;
export default function webcam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>Sucecio un error:${err}</mark></p>`
        );
        console.log(`Sucecio un error: ${err}`);
      });
  }
}
