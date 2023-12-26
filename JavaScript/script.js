let navCollapse = document.querySelector(".navbar-collapse")
let navLink = document.querySelectorAll("nav .nav-link")
let themeIcon = document.querySelector("#icon i")
for(let x = 0; x < navLink.length; x++){
    navLink[x].addEventListener("click",()=>{
        navCollapse.classList.remove("show")
    })
}
themeIcon.addEventListener("click",()=>{
    navCollapse.classList.remove("show")
})


let homeheading1 = document.querySelector(".hidden1")
setInterval(anim, 1150)
let change = false;
function anim() {
    if (change) {
        homeheading1.classList.replace("hidden1", "visible")
        change = false;
    } else {
        homeheading1.classList.replace("visible", "hidden1")
        change = true;
    }
}
let homeheading2 = document.querySelector(".hidden2")
setInterval(animTwo, 1200)
let changeTwo = false;
function animTwo() {
    if (changeTwo) {
        homeheading2.classList.replace("hidden2", "visible")
        changeTwo = false;
    } else {
        homeheading2.classList.replace("visible", "hidden2")
        changeTwo = true;
    }
}
let homeheading3 = document.querySelector(".hidden3")
setInterval(animThree, 1350)
let changeThree = false;
function animThree() {
    if (changeThree) {
        homeheading3.classList.replace("hidden3", "visible")
        changeThree = false;
    } else {
        homeheading3.classList.replace("visible", "hidden3")
        changeThree = true;
    }
}

let icon = document.querySelector(".icon")
let theme = document.querySelector("body")
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let navBar = document.querySelector(".navbar")
let homeContainer = document.querySelector(".home-container")
let icons = true;
icon.addEventListener("click", function () {
    if (icons) {
        icon.classList.replace("fa-sun", "fa-moon")
        icon.classList.replace("text-dark", "text-light")
        theme.classList.replace("bg-dark", "bg-light")
        theme.classList.replace("text-light", "text-dark")
        card1.classList.remove("bg-dark", "text-light")
        card2.classList.remove("bg-dark", "text-light")
        card3.classList.remove("bg-dark", "text-light")
        homeContainer.classList.replace("home-container", "home-containerLight")
        navBar.classList.replace("bg-body-tertiary", "bg-dark")
        navBar.classList.add("navbar-dark")
        icons = false;
    } else {
        icon.classList.replace("fa-moon", "fa-sun")
        icon.classList.replace("text-light", "text-dark")
        theme.classList.replace("bg-light", "bg-dark")
        theme.classList.replace("text-dark", "text-light")
        card1.classList.add("bg-dark", "text-light")
        card2.classList.add("bg-dark", "text-light")
        card3.classList.add("bg-dark", "text-light")
        homeContainer.classList.replace("home-containerLight", "home-container")
        navBar.classList.replace("bg-dark", "bg-body-tertiary")
        navBar.classList.remove("navbar-dark")
        icons = true;
    }
})

let sliderContainer = document.querySelector(".slider-container")
let slider = document.querySelector(".slider")
let mousedown = false,prevPageX,prevScrollLeft;


const dragStart = (e)=>{
    mousedown = true;
    prevPageX = e.pageX;
    prevScrollLeft = sliderContainer.scrollLeft;
}

const dragStop = ()=>{
    mousedown = false;
}

const move = (e) => {
    if (!mousedown) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        sliderContainer.scrollLeft = prevScrollLeft - positionDiff;
}


sliderContainer.addEventListener("mousedown",dragStart)
sliderContainer.addEventListener("mousemove", move)
sliderContainer.addEventListener("mouseup",dragStop)
