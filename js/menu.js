let hamBtn = document.querySelector(".ham-btn")
let menuItems = document.querySelector(".menu-items")
let menuClose = document.querySelector("#menu-close")

hamBtn.addEventListener("click",()=>{
    menuItems.style.transform = "translateX(0%)"
})
menuClose.addEventListener("click",()=>{
    menuItems.style.transform = "translateX(100%)"
})