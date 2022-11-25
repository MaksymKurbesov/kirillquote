import $ from 'jquery'
import 'slick-carousel'

const prevButtonComponent = document.querySelector('.prev-slider-button')
const nextButtonComponent = document.querySelector('.next-slider-button')

$('.slider').slick({
    //options
    arrows: true,
    nextArrow: nextButtonComponent,
    prevArrow: prevButtonComponent,
})
