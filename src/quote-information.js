import './scss/pages/quote-information.scss'

const quoteInformationTypes = [
  'from',
  'to',
  'date',
  'carrier-type',
  'car-year',
  'car-make',
  'car-model',
  'car-operable',
  'user-mail',
  'user-phone',
]

const init = () => {
  quoteInformationTypes.forEach((type) => {
    const component = document.querySelector(`[data-type=${type}]`)
    console.log(component)
    const value = localStorage.getItem(type)

    component.innerHTML = value
  })
}

init()
