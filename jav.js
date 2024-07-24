const display = document.getElementById("check");





function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(e){
        display.value="Error";
    }
}