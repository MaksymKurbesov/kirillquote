import{calculatePrice}from"../index";const nextButtonComponent=document.querySelector(".next-button"),calculatorStepScreens=document.querySelectorAll(".calculator-step"),calculatorStages=document.querySelectorAll(".process-steps div");let currentStep=1,isFinalScreen=!1;nextButtonComponent.addEventListener("click",(()=>{currentStep>=calculatorStepScreens.length&&(isFinalScreen=!0),isFinalScreen||(calculatorStepScreens.forEach((e=>{e.style.display="none"})),calculatorStages.forEach((e=>{e.classList.remove("active-step")})),calculatePrice(),calculatorStages[currentStep].classList.add("active-step"),calculatorStepScreens[currentStep].style.display="block",calculatorStages[currentStep-1].classList.add("completed-step"),currentStep++)}));