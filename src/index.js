import './scss/index.scss'
import { autoCompletes, getDistance } from './js/autoCompletes'
import './js/changeCalculatorStep'
import './js/slider'

const yearInputCompnonent = document.querySelector('#year-select')
const makeInputCompnonent = document.querySelector('#make-select')
const modelInputCompnonent = document.querySelector('#model-select')
const operableInputCompnonent = document.querySelector('#operable-select')
const carrierTypeComponent = document.querySelector(
  'input[name="carrier"]:checked'
)
const priceComponent = document.querySelector('.price')
const calculateButton = document.querySelector('.calculate-button')

let map = L.map('map').setView([40.91, -96.63], 4)

let priceTotal = 0
let mileCoef = 1.609

autoCompletes(map)

const calculatePrice = () => {
  priceTotal =
    Number(carrierTypeComponent.value) +
    Number(yearInputCompnonent.value) +
    Number(makeInputCompnonent.value) +
    Number(modelInputCompnonent.value) +
    Number(operableInputCompnonent.value)
}

// calculateButton.addEventListener('click', () => {
//   priceTotal += Math.round(getDistance() / 1000 / mileCoef)
//
//   priceComponent.innerHTML = priceTotal
// })

export { calculatePrice }
