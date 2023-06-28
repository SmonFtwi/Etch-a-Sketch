const container = document.querySelector('.Container');
const sliderValue = document.getElementById('sliderValue');
let colorPicker = '#ff0000';
let isDrawing = false;
let size=16;

// function for color mode selecting 
document.querySelector('#static').addEventListener('click', function(){
    colorPicker=document.getElementById('favcolor').value;

});
document.querySelector('#favcolor').addEventListener('input', function(){
    colorPicker = this.value;
});

/*
// random color generator 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('#random').addEventListener("click", () => {
    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);
    colorPicker = `rgb(${red}, ${green}, ${blue})`;
});
*/

  
// this function will accept the size of the box and add the size to the sliderVulue
document.querySelector('#vol').addEventListener('input', function() {

    size=this.value;
    createSquare(size);
    sliderValue.textContent = `Size: ${size} x ${size}`;

});

// this function will create all the square using forloop and the selected size
function createSquare(size){
    container.innerHTML = '';
    for (let i = 0; i < size*size; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener('mouseover', changeColor);
        container.appendChild(content);
      }
  
      const flexBasis = `${100 / size}%`;
      const contentElements = document.querySelectorAll('.content');
      contentElements.forEach(element => {
        element.style.flexBasis = flexBasis;
        element.style.width = flexBasis; 
        element.style.height = flexBasis;

       }); 
      
};

function changeColor(event) {
      const content = event.target;
      content.style.backgroundColor = colorPicker;
    } 
  

 
  
  
  
  
  
  



