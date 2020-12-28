const d = document,
  w = window;
export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextArea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  let voces = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voces = w.speechSynthesis.getVoices();
      //console.log(voces); //speechSynthesis.getVoices();
      voces.forEach((voz) => {
        const $option = d.createElement("option");
        $option.value = voz.name;
        $option.textContent = `${voz.name} ***:${voz.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voces.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextArea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
