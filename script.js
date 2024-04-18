const color0 = document.getElementsByClassName('color')[0];
const color1 = document.getElementsByClassName('color')[1];
const color2 = document.getElementsByClassName('color')[2];
const color3 = document.getElementsByClassName('color')[3];

window.onload = () => {
    color0.classList.add('selected')
    
    if(localStorage.getItem('colorPalette')) {
        loadColors()
    };

    if(localStorage.getItem('pixelBoard')) {
        loadBoard()
    };
};

let cor = document.querySelectorAll('.color');
const cPalette = document.getElementById('color-palette');

const seleciona = (event) => {
    const selecteds = document.querySelectorAll('.selected');
    for (let el of selecteds) {
        el.classList.remove('selected')
    }
    event.target.classList.add('selected');
};

cor[0].style.backgroundColor = '#000000';
cor[1].style.backgroundColor = '#FF0000';
cor[2].style.backgroundColor = '#008000';
cor[3].style.backgroundColor = '#0000FF';

color0.addEventListener('click', seleciona);
color1.addEventListener('click', seleciona);
color2.addEventListener('click', seleciona);
color3.addEventListener('click', seleciona);

const Botao = document.getElementById('button-random-color');
const reset = document.getElementById('clear-board');

const saveBoard = document.getElementById('pixel-board');

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', (event) => {
  const selecionado = document.querySelector('.selected');

  event.target.style.backgroundColor = selecionado.style.backgroundColor;

  localStorage.setItem('pixelBoard', saveBoard.innerHTML);
});

const loadBoard = () => {
    saveBoard.innerHTML = localStorage.getItem('pixelBoard');
};

reset.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
    localStorage.clear();

    cor[0].style.backgroundColor = '#000000';
    cor[1].style.backgroundColor = '#FF0000';
    cor[2].style.backgroundColor = '#008000';
    cor[3].style.backgroundColor = '#0000FF';
});

function gerarCores() {
    const letras = '0123456789ABCDEF';
    let hexa = '#';

    for(let index = 0; index < 6; index +=1) {
        hexa += letras[Math.floor(Math.random() * 16)];
    }
    return hexa;
};

Botao.addEventListener('click', () => {
    for(let index = 1; index < 4; index += 1) {
        cor[index].style.backgroundColor = gerarCores();
    }

    const saveColors = {
        cor1: cor[1].style.backgroundColor,
        cor2: cor[2].style.backgroundColor,
        cor3: cor[3].style.backgroundColor,
    }
    
    const stringSaveColors = JSON.stringify(saveColors)
    localStorage.setItem('colorPalette', stringSaveColors)
});

const loadColors = () => {
    const saveColors = JSON.parse(localStorage.getItem('colorPalette'))

    cor[1].style.backgroundColor = saveColors.cor1;
    cor[2].style.backgroundColor = saveColors.cor2;
    cor[3].style.backgroundColor = saveColors.cor3;
};

