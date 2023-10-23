let display = document.getElementById('display')

function appendToDisplay(value) {
  display.append(value)
}

function clearDisplay() {
  display.textContent = ''
}

function calculateResult() {
  let str = display.textContent.replaceAll('x', '*').replaceAll('÷', '/')
  try {
    const result = eval(str)
    display.textContent = result
  } catch (error) {
    display.textContent = error
  }
}
