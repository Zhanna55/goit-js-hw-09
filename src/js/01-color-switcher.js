const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

const COLOR_SWICHER_DELAY = 1000;
let intervalId = null;

refs.start.addEventListener('click', onStartColorSwicher);

function onStartColorSwicher() {
  onChangeColor();
  refs.start.disabled = true;
}

function onChangeColor() {
  intervalId = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    COLOR_SWICHER_DELAY
  );
}

refs.stop.addEventListener('click', onStopColorSwicher);

function onStopColorSwicher() {
  clearInterval(intervalId);
  refs.start.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
