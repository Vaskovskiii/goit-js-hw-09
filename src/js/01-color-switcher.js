function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
const refs = {
  bodyEl: document.querySelector('body'),
  btn: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
}

refs.btn.addEventListener('click', () => {
  myStartFunction()
  refs.btn.disabled = true
  refs.btnStop.disabled = false
})

refs.btnStop.addEventListener('click', () => {
  refs.btnStop.disabled = true
  refs.btn.disabled = false
  myStopFunction()
})

let timerId
function myStartFunction() {
  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000)
}
function myStopFunction() {
  clearInterval(timerId)
}
