const toggleButton = document.querySelector('.header--btn');

let bodyCon        = document.querySelector('body');
let themeIcon   = document.querySelector('.header--img');
let inputField  = document.querySelector('#nav--input');
let main        = document.querySelector('main');
let social      = document.querySelector('.social--section');

let test        = document.querySelectorAll('.attr');

let lightMode = true;


function allElements(){
    // So This is need to iterate though the elements else "undefined" error.
    if(lightMode === true){
        for(let i=0; i < test.length; i++){
            test[i].style.color = "#FFF";
        }
    } else {
        for(let i=0; i < test.length; i++){
            test[i].style.color = "var(--softblue)";
        }
    }
    
}

function activateDarkMode(){
    bodyCon.style.backgroundColor = '#141D2f';
    bodyCon.style.color = '#FFF';
    toggleButton.style.backgroundColor = '#141D2f';
    toggleButton.style.color = '#FFF';
    themeIcon.src = './assets/icon-sun.svg';
    inputField.style.backgroundColor = '#1E2A47';
    inputField.style.color = '#FFF';
    inputField.classList.add('placeholderColor');
    main.style.backgroundColor = '#1E2A47';
    social.style.backgroundColor = '#141D2f';
    allElements();

    lightMode = false;
    console.log("Dark Theme Active");
}

function activateLightMode(){
    bodyCon.style.backgroundColor = 'var(--bgColor)';
    bodyCon.style.color = 'black';
    toggleButton.style.backgroundColor = 'var(--bgColor)';
    toggleButton.style.color = 'var(--softBlack)';
    themeIcon.src = './assets/icon-moon.svg';
    inputField.style.backgroundColor = 'var(--bodyColor)';
    inputField.style.color = 'var(--softBlack)';
    inputField.classList.remove('placeholderColor');
    main.style.backgroundColor = 'var(--bodyColor)';
    social.style.backgroundColor = 'var(--bgColor)';
    allElements();

    lightMode = true;
    console.log("Light Theme Active");
}



toggleButton.addEventListener('click', () => {
    lightMode === true ? activateDarkMode() : activateLightMode();
})