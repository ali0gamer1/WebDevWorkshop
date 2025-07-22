


let theSmallBox = document.getElementById("TheSmallerOne");
let paddingElement = document.getElementById("padding-controller-field");
let theBigBox = document.getElementById("TheBiggerOne");




function changePaddingValue(paddingVal, whichBox = 1)
{   
    theBox = null;

    if (whichBox == 1)
        theBox = theBigBox;
    else
        theBox = theSmallBox;
    
    theBox.style.padding = `${paddingVal}px`;

}



