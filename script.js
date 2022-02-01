const container = document.querySelector('#container');
container.style.cssText += 'height: 1200px; width: 1200px;';
let gridwidth = 48;
let gridheight = 48;
let boxes = gridheight * gridwidth;
const blackButton = document.querySelector('#black');
const rgbButton = document.querySelector('#rgb');
const resetButton = document.querySelector('#reset');



for (let index = 0; index < boxes; index++) {
   let div = document.createElement('div')
   div.classList.add('inside');
   
   div.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'black';
})
   container.appendChild(div)
}




function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

blackButton.addEventListener('click', function(){
    let cell = container.children;
    for (let i = 0; i < boxes; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
})

rgbButton.addEventListener('click', function(){
    let cell = container.children;
    for (let i = 0; i < boxes; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomColor();
        })
    }
})
resetButton.addEventListener('click', function(){
    let cell = container.children;
    for (let i = 0; i < boxes; i++) {
        cell[i].style.backgroundColor = 'white';

    }
})

