import { calculatePrice } from '../index'

const nextButtonComponent = document.querySelector('.next-button')
const calculatorStepScreens = document.querySelectorAll('.calculator-step')
const calculatorStages = document.querySelectorAll('.process-steps div')
const calculatorStepButton = document.querySelector('.next-button')
const calculateQuoteButton = document.querySelector('.calculate-quote')

const fromInputComponent = document.querySelector('.search-from-label input')
const toInputComponent = document.querySelector('.search-to-label input')
const timeComponent = document.querySelector('.delivery-time input')
const carrierTypeComponent = document.querySelector(
  'input[name="carrier"]:checked'
)

const stepOneInputValues = [
  fromInputComponent,
  toInputComponent,
  timeComponent,
  carrierTypeComponent,
]

const yearInputCompnonent = document.querySelector('#year-select')
const makeInputCompnonent = document.querySelector('#make-select')
const modelInputCompnonent = document.querySelector('#model-select')
const operableInputCompnonent = document.querySelector('#operable-select')

const stepTwoInputValues = [
  yearInputCompnonent,
  makeInputCompnonent,
  modelInputCompnonent,
  operableInputCompnonent,
]

const mailInputComponent = document.querySelector('.user-mail')
const phoneInputComponent = document.querySelector('.user-phone')

const stepThreeInputValues = [mailInputComponent, phoneInputComponent]

const stepValues = [
  stepOneInputValues,
  stepTwoInputValues,
  stepThreeInputValues,
]

let currentStep = 1
let isFinalScreen = false

nextButtonComponent.addEventListener('click', () => {
  if (currentStep >= calculatorStepScreens.length) {
    isFinalScreen = true
  }

  if (currentStep >= calculatorStepScreens.length - 1) {
    calculatorStepButton.style.display = 'none'
    calculateQuoteButton.style.display = 'block'
  }

  if (!isFinalScreen) {
    calculatorStepScreens.forEach((step) => {
      step.style.display = 'none'
    })
    calculatorStages.forEach((stage) => {
      stage.classList.remove('active-step')
    })
    calculatePrice()
    calculatorStages[currentStep].classList.add('active-step')
    calculatorStepScreens[currentStep].style.display = 'block'

    calculatorStages[currentStep - 1].classList.add('completed-step')
  }

  setValueToLocalStorage(currentStep - 1)

  currentStep++
})

calculateQuoteButton.addEventListener('click', () => {
  setValueToLocalStorage(currentStep - 1)
})

const setValueToLocalStorage = (step) => {
  stepValues[step].forEach((item) => {
    console.log(item.dataset.type)
    localStorage.setItem(item.dataset.type, item.value)
  })
}
