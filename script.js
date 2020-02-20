//All JavaScript code by Blake Wood Jr.
const displayBar = document.getElementById("displayBar");

function getValue(obj)
{
    let inputNum = obj.innerHTML;
    displayBar.innerHTML = "";
    
    if(inputNum == "=")
        {
            displayBar.innerHTML = eval(displayBar.innerHTML);
        }
    else if (inputNum == "C")
        {
            displayBar.innerHTML = "0";
        }
    else if(displayBar == "0")
        {
            displayBar.innerHTML = inputNum;
        }
    else
        {   
            displayBar.innerHTML += inputNum;
        }
        
}




