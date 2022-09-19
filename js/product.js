const darkmode = document.querySelector("#darkmode");
const lightmode = document.querySelector("#lightmode");

function setDarkMode(){
    body.style.backgroundColor="white";
    body.style.color="black";
}

function setLightMode(){
    body.style.backgroundColor="black";
    body.style.color="white";
}

darkmode.addEventListener('click',setDarkMode);
lightmode.addEventListener('click',setLightMode);


const li_list = document.querySelector("li");
for(let l in li_list){
    console.log(l.innerHTML);
}