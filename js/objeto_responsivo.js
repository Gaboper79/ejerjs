const d = document,
  w = window;
export default function responsiveMedia(id, mq, mobileContent, destopContent) {
  let breakpoint = w.matchMedia(mq);

  //console.log(breakpoint.matches);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = destopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
