// document.addEventListener('DOMContentLoaded', function (){
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('appendValue');

//     buttons.forEach(button =>{
//         const value = button.getAttribute('appendValue')
//     })
// })

// const display = document.getElementById('display');


// function appendToDisplay(input){
//   display.value =+ input;
// }

// function clearDisplay(){

// }

// function calculate(){


function appendValue(value) {
        document.getElementById("display").value += value;
      }

      function clearDisplay() {
        display.value ="";
      }

      function calculate() {
        var expression = document.getElementById("display").value;
        var result = eval(expression);
        document.getElementById("display").value = result;
      }

      const deleteButton = document.querySelectorAll('deleteDisplay')

    //   function delete1() {
    //   .slice(0,-1)
    //  }