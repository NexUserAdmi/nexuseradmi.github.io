const slider = document.querySelector("#slider_admision");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    sliderSection = document.querySelectorAll(".slider_section");
    sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnLeft.addEventListener('click', ()=>{
    Prev();
})

btnRight.addEventListener('click', ()=>{
    Next();
})

setInterval(() => {
    Next();
}, 6000);