//2

function calculate(numOne : number, numTwo :number) {
  return numOne + numTwo;
}

calculate(+"10", +"20")



//3

let val : number | string ;




//4

let arr: (number | boolean[] | (string | (string | number)[])[])[] 
   = [5, [true] , ["Ali" , "5"] ] 



//6
let nothing ;
let theName: string = "Elzero";


function showMyDetails(a = "", b = "", c ) {
  return `${a}${b}${c}`;
}


showMyDetails(nothing , nothing , theName)



//7 


function showMsg(user ?: string, age?: number | string, country?: string) {
  return `${user}${age}${country}`;
}


showMsg()
showMsg("Elzero")
showMsg("Elzero", 40)
showMsg("Elzero", "40", "Egypt")






//8


function printInConsole(...value :(number |string | boolean )[]){
for (let item of value) {
    console.log(`The Value Is ${item} And Type Is ${typeof item}`)
}

return "Done"
}

console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));









//----------------------



