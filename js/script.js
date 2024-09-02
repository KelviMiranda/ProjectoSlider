"use strict";

const listItem = document.querySelectorAll(".item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let count = listItem.length;
let active = 0;

next.addEventListener("click", () => {
    const activeOld = document.querySelector(".active");
    activeOld.classList.remove("active");
    /* active = active >= count - 1 ? 0 : active + 1;
    listItem[active].classList.add("active");
     */

    if(active >= count - 1 ){
        active = 0;
        listItem[active].classList.add("active");
    }else{
        active = active + 1;
        listItem[active].classList.add("active");
    }
})


prev.addEventListener("click", () => {
    const activeOld = document.querySelector(".active");
    activeOld.classList.remove("active");
    active = active <= 0 ? count - 1 : active - 1;
    listItem[active].classList.add("active");
    console.log(active);
});