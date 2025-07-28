


let theSmallBox = document.getElementById("TheSmallerOne");
let paddingElement = document.getElementById("padding-controller-field");
let theBigBox = document.getElementById("TheBiggerOne");
const menu = document.getElementById('draggable-menu');

  
// Dragging logic
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let isMenu = false;



function clearInputs()
{

  theSmallBox.style = "";
  theBigBox.style = "";

  inputs = Array.from(document.getElementsByTagName("input"));
  inputs.forEach(element => {

    if (element.type == "checkbox")
      {
        element.checked = false;  
        return;
      }
    
   
      element.value = 0
      
      element.previousElementSibling.value = 0;
      
      if (element.id == "bigBox")
      {
        element.value = 25;
        element.previousElementSibling.value = 25;
      }   
      
      
  });


  
}


menu.addEventListener('mousedown', (e) => {
  isDragging = true;
  if (e.target === menu)
    isMenu = true;
  offsetX = e.clientX - menu.offsetLeft;
  offsetY = e.clientY - menu.offsetTop;
  document.body.style.userSelect = "none"; // prevent selecting text while dragging
});


document.addEventListener('mousemove', (e) => {
  if (isDragging && isMenu) {
    menu.style.left = (e.clientX - offsetX) + 'px';
    menu.style.top = (e.clientY - offsetY) + 'px';
  }
});


document.addEventListener('mouseup', () => {
  isDragging = false;
  isMenu = false;
  document.body.style.userSelect = ""; // restore text selection
});



function changeCords(posVal, whichPos, whichBox)
{
    theBox = null;

    if (whichBox == 1)
        theBox = theBigBox;
    else
        theBox = theSmallBox;
    
    theBox.style[whichPos] = `${posVal}px`;
    
}

function changeDisplay(checkBox, whichBox = 1, posVal = "static")
{
    
    theBox = null;

    if (whichBox == 1)
        theBox = theBigBox;
    else
        theBox = theSmallBox;
    
    posVals = ["static", posVal];

    

    theBox.style.position = posVals[+checkBox.checked];

}


function changePaddingValue(paddingVal, whichBox = 1)
{   
    theBox = null;

    if (whichBox == 1)
        theBox = theBigBox;
    else
        theBox = theSmallBox;
    
    theBox.style.padding = `${paddingVal}px`;

}



