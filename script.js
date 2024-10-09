let loader = document.getElementById("pre__loader")

window.addEventListener("load", function(){
    loader.classListList.add("pre__loader--hidden")
})

function submitted(){
    alert("We got your message and will surely give you a call to proccess the date")
}

const hamburger = document.querySelector(".hamburger__menu")
const nav = document.querySelector(".nav__link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active")
})

document.querySelectorAll(".nav__links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))

const car = document.getElementById('car');

function white(){
    const white = document.getElementById("white")
    const src1 = white.src;
    car.src = src1;
}
function silver(){
    const silver = document.getElementById("silver")
    const src2 = silver.src;
    car.src = src2;
}
function blue(){
    const blue = document.getElementById("blue")
    const src3 = blue.src;
    car.src = src3;
}
function brown(){
    const brown = document.getElementById("brown")
    const src4 = brown.src;
    car.src = src4;
}
function red(){
    const red = document.getElementById("red")
    const src5 = red.src;
    car.src = src5;
}



// https://i.pinimg.com/236x/2d/5d/40/2d5d40f35fc93f3b8f1868bf33af26f2.jpg
// https://i.pinimg.com/564x/48/ce/48/48ce4814dcea2d8a0d732d9a0936a482.jpg
//  https://i.pinimg.com/236x/30/31/21/303121a6d60535fcfb309be799471097.jpg
// https://i.pinimg.com/236x/77/89/f0/7789f0f52f8cf64746fdaa3728c01253.jpg