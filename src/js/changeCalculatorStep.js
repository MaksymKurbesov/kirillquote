import { calculatePrice } from '../index'

const nextButtonComponent = document.querySelector('.next-button')
const calculatorStepScreens = document.querySelectorAll('.calculator-step')
const calculatorStages = document.querySelectorAll('.process-steps div')

let currentStep = 1
let isFinalScreen = false

nextButtonComponent.addEventListener('click', () => {
    if (currentStep >= calculatorStepScreens.length) {
        isFinalScreen = true
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
        currentStep++
    }
})
