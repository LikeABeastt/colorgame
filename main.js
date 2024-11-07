const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')

// Color Choices
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const red = document.getElementById('red')
const white = document.getElementById('white')
const pink = document.getElementById('pink')

// 3 Random Color for winner
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const moneyCount = document.querySelector('.moneyCount')

// Input Bet
const betAmount = document.querySelector('.betAmount')
const inputBet = document.getElementById('inputBet')
const submitBet = document.getElementById('submitBet')

let cash = 500
let cashWon = 0
let totalBet = 0
let colors = ['Green', 'Yellow', 'Blue', 'Red', 'White', 'Pink']
let randomColors = []

submitBet.addEventListener('click', () => {
  betAmount.textContent = totalBet

  startBtn.disabled = false
  submitBet.disabled = true
  disableChoices()
})

startBtn.addEventListener('click', () => {
  let randomColor1 = colors[Math.floor(Math.random() * colors.length)]
  let randomColor2 = colors[Math.floor(Math.random() * colors.length)]
  let randomColor3 = colors[Math.floor(Math.random() * colors.length)]

  color1.style.backgroundColor = randomColor1
  color2.style.backgroundColor = randomColor2
  color3.style.backgroundColor = randomColor3

  startBtn.disabled = true
  resetBtn.disabled = false
  addWinner(randomColor1)
  addWinner(randomColor2)
  addWinner(randomColor3)


  winnerColors()
  console.log(randomColors)
})

resetBtn.addEventListener('click', () => {
  randomColors = []
  cashWon = 0
  totalBet = 0
  inputBet.disabled = false
  submitBet.disabled = true
  startBtn.disabled = true
  disableChoices()

  green.checked = false
  yellow.checked = false
  blue.checked = false
  red.checked = false
  white.checked = false
  pink.checked = false

  color1.style.backgroundColor = 'whitesmoke'
  color2.style.backgroundColor = 'whitesmoke'
  color3.style.backgroundColor = 'whitesmoke'

  betAmount.textContent = ''
  inputBet.value = ''
})

// Push the 3 random color to the randomColors array
function addWinner(e) {
  randomColors.push(e)
}

// Winning condition
function winnerColors() {
  if (green.checked) {
    randomColors.filter((x) => {
      if (x.includes('Green')) {
        cashWon = inputBet.value * 2
        cash += cashWon
        moneyCount.textContent = `Cash: ${cash}`
      }
    })
  }
  if (yellow.checked) {
    randomColors.filter((x) => {
      if (x.includes('Yellow')) {
        cashWon = inputBet.value * 2
        cash += cashWon
        moneyCount.textContent = `Cash: ${cash}`
      }
    })
  }
  if (blue.checked) {
    randomColors.filter((x) => {
      if (x.includes('Blue')) {
        cashWon = inputBet.value * 2
        cash += cashWon
        moneyCount.textContent = `Cash: ${cash}`
      }
    })
  }
  if (red.checked) {
    randomColors.filter((x) => {
      if (x.includes('Red')) {
        cashWon = inputBet.value * 2
        cash += cashWon
        moneyCount.textContent = `Cash: ${cash}`
      }
    })
  }
  if (white.checked) {
    randomColors.filter((x) => {
      if (x.includes('White')) {
        cashWon = inputBet.value * 2
        cash += cashWon
        moneyCount.textContent = `Cash: ${cash}`
      }
    })
  }
  if (pink.checked) {
    randomColors.filter((x) => {
      if (x.includes('Pink')) {
        cashWon = inputBet.value * 2
        cash += cashWon
        moneyCount.textContent = `Cash: ${cash}`
      }
    })
  }
}

// Color choices condition
function chooseColor() {
  submitBet.disabled = false
  if (cash <= 0) {
    moneyCount.textContent = `Cash: Stop! Bawal na umutang`
    enableChoices()
  } else if (green.checked) {
    cash -= parseInt(inputBet.value)
    totalBet += parseInt(inputBet.value)
    moneyCount.textContent = `Cash: ${cash}`
    betAmount.textContent = totalBet
  } else if (yellow.checked) {
    cash -= parseInt(inputBet.value)
    totalBet += parseInt(inputBet.value)
    moneyCount.textContent = `Cash: ${cash}`
    betAmount.textContent = totalBet
  } else if (blue.checked) {
    cash -= parseInt(inputBet.value)
    totalBet += parseInt(inputBet.value)
    moneyCount.textContent = `Cash: ${cash}`
    betAmount.textContent = totalBet
  } else if (red.checked) {
    cash -= parseInt(inputBet.value)
    totalBet += parseInt(inputBet.value)
    moneyCount.textContent = `Cash: ${cash}`
    betAmount.textContent = totalBet
  } else if (white.checked) {
    cash -= parseInt(inputBet.value)
    totalBet += parseInt(inputBet.value)
    moneyCount.textContent = `Cash: ${cash}`
    betAmount.textContent = totalBet
  } else if (pink.checked) {
    cash -= parseInt(inputBet.value)
    totalBet += parseInt(inputBet.value)
    moneyCount.textContent = `Cash: ${cash}`
    betAmount.textContent = totalBet
  }

  if (green.checked) {
    green.disabled = true
    inputBet.disabled = true
  }
  if (yellow.checked) {
    yellow.disabled = true
    inputBet.disabled = true
  }
  if (blue.checked) {
    blue.disabled = true
    inputBet.disabled = true
  }
  if (red.checked) {
    red.disabled = true
    inputBet.disabled = true
  }
  if (white.checked) {
    white.disabled = true
    inputBet.disabled = true
  }
  if (pink.checked) {
    pink.disabled = true
    inputBet.disabled = true
  }
}

// Disable choices after choosing
function enableChoices() {
  green.disabled = false
  yellow.disabled = false
  blue.disabled = false
  red.disabled = false
  white.disabled = false
  pink.disabled = false
}

// Disable choices if the game is over
function disableChoices() {
  green.disabled = true
  yellow.disabled = true
  blue.disabled = true
  red.disabled = true
  white.disabled = true
  pink.disabled = true
}
