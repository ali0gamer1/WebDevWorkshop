


let theSmallBox = document.getElementById("TheSmallerOne");
let paddingElement = document.getElementById("padding-controller-field");
let theBigBox = document.getElementById("TheBiggerOne");


function changeCords(posVal, whichPos, whichBox)
{
    theBox = null;

    if (whichBox == 1)
        theBox = theBigBox;
    else
        theBox = theSmallBox;
    
    theBox.style[whichPos] = `${posVal}px`;
    
}

function changeDisplay(test, whichBox = 1)
{
    theBox = null;

    if (whichBox == 1)
        theBox = theBigBox;
    else
        theBox = theSmallBox;
    

    const posVals = ["static", "relative"];

    theBox.style.position = posVals[+test.checked];

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



