let taskbar = document.getElementsByClassName('bar')[0];
let startmenu = document.getElementsByClassName('menu')[0];

taskbar.addEventListener("click", ()=>{
    if (startmenu.style.bottom == "20px") {
        startmenu.style.bottom = "-640px";
    }
    else {
        startmenu.style.bottom = "20px";
    }
})