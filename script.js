const seedsButton = document.querySelector("#seeds_button");
const seeds=document.querySelector(".seeds");

const cheeseButton=document.getElementById("cheese_button");
const cheese=document.querySelector(".cheese");

const lettuceButton=document.getElementById("lettuce_button");
const lettuce=document.querySelector(".lettuce");

const ketchupButton=document.getElementById("ketchup_button");
const ketchup=document.querySelector(".ketchup");


document.querySelector("#seeds_button").addEventListener('click', e => {
    if(seeds.style.display === 'block') {
        seeds.setAttribute("style", "display:none");
    } else {
        seeds.setAttribute("style", "display:block");
    }
});

document.querySelector("#cheese_button").addEventListener('click', e => {
    if(cheese.style.display === 'block') {
        cheese.setAttribute("style", "display:none");
    } else {
        cheese.setAttribute("style", "display:block");
    }
});

document.querySelector("#lettuce_button").addEventListener('click', e => {
    if(lettuce.style.display === 'block') {
        lettuce.setAttribute("style", "display:none");
    } else {
        lettuce.setAttribute("style", "display:block");
    }
});

ketchupButton.addEventListener('click', e => {
    if(ketchup.style.display==='block') {
        ketchup.setAttribute("style","display:none");
    } else {
        ketchup.setAttribute("style", "display:block");
    }
});