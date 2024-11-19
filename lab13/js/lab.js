// index.js - Lab 12: Conditionals
// Author: Oliver Winkler
// Date:11/018/2024

//


function fizzBuzzBoom(){

let outputStr = "";

for (let i=1;i<=200; i++){
  //if multiple of 3
  
  if(i%105 === 0){
    console.log( i + " FizzBuzzBoom")
    outputStr += i + " FizzBuzzBoom<br>"
  }
  else if(i%35 === 0){
    console.log(i + " BuzzBoom")
    outputStr += i + " BuzzBoom<br>"
  }
  else if(i%15 === 0){
    console.log(i + " FizzBuzz")
    outputStr += i + " FizzBuzz<br>"
  }
    else if(i%7 === 0){
      console.log(i + " Boom")
      outputStr += i + " Boom<br>"
    }
    else if(i%5 === 0){
      console.log(i + " Buzz")
      outputStr += i + " Buzz<br>"
    }
    else if(i%3 === 0){
      console.log(i + " Fizz")
      outputStr += i + " Fizz<br>"
    
    }
   else{ 
    
     console.log(i)
     outputStr += i + "<br>"
  }
 
}
$("#output").html(outputStr);

}

fizzBuzzBoom();

// 3 * 5 = 15
//3*7 = 21
//5*7 = 35
//3*5*7 = 105

// 3 fizz
// 5 buzz
// 7 boom

//105 
//35
//21
//15
//7
//5
//3