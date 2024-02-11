const colorButton = document.getElementById("colorButton");
const greetingBox = document.getElementById("greetingBox");
const calculateButton = document.getElementById("calculateButton");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultBox = document.getElementById("result");

//add a click event listener to color button
colorButton.addEventListener("click",()=>
{  //changing the button color when clicked 
    colorButton.style.backgroundColor =getRandomColor();


});



//Function  to generate a random color
function getRandomColor(){
    const letters ="0123456789ABCDEF";
    let color ="#";
    for (let i=0; i<6 ; i++ ){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function sayHello(){
     alert("enter value  below and get the answer");
}

calculateButton.addEventListener("click",()=>{
    const num1 =parseFloat(num1Input.value);
    const num2 =parseFloat(num2Input.value);


     if(!isNaN(num1)  && !isNaN(num2))   {
        const sum = num1 + num2 ;
        resultBox.innerHTML = `Result:${sum }`;
        resultBox.classList.remove("hidden");
    }else{
        resultBox.innerHTML="Please enter Valid number.";
        resultBox.classList.remove("hidden");
    }
});
 

const currentTime = new Date();
const currentHour =currentTime.getHours();

let greetingMessage;

if (currentHour < 12)
{
    greetingMessage ="Good Morning!";
}else if(currentHour <18){
     greetingMessage="Good afternoon!";

}else {
    greetingMessage="Good evening!";``
}

greetingBox.innerHTML = greetingMessage;
greetingBox.classList.remove("hidden");






