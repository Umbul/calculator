//selector




const output = document.querySelector(".output");//target 1st element 
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");//target selected elements


keys.forEach(key=>{
 key.addEventListener("click",calculate);
});

function calculate(){
     let buttonText = this.innerText;
     if(buttonText==="AC"){
     output.innerText = "";
     result.innerText = "0";
     return;
     }
     if(buttonText === "DEL"){
         output.textContent = output.textContent.substring(0,output.textContent.length-1);
         return;
         } 
         
         
         if(buttonText === "="){
         result.innerText = eval(output.innerText);

         }

     else
     {
//  output.textContent += buttonText;
 return;
 }
    }
