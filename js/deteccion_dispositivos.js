const d = document,
  n = navigator,
  ua = navigator.userAgent;

export default function userDeviceinfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windoes: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windoes();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {};

  $id.innerHTML = `
  <ul>
  <li>User Agent:<b>${ua}</b></li>
  <li>Sistema operativo:<b>${
    isDesktop.any() ? isDesktop.any() : isMobile.any()
  }</b></li>
  
  </ul>`;
}
