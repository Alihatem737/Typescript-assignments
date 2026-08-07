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


//1 

type n = number
let myData: n;



myData = 1000;
myData = +true;




//2 

type mix = number | boolean;

let myInfo: mix;

myInfo = 1000;
myInfo = true;




//3 


type Info = {
    theName : string,
    theAge : number
}

type Full = Info & {
    country : string
}



//4 


function yesOrNo(num : number) : boolean{

    return num > 10
}

//yesOrNo("100") 
yesOrNo(30)    // true
yesOrNo(8)     // false






//5 

type custom = "Yes" | "No";


function isHeOld(age: number ) : custom  {
  return age > 40 ?  "Yes" : "No";
}


//isHeOld("100") // Error
isHeOld(45)    // "Yes"
isHeOld(30)    // "No"





//6 


let post: readonly [number, string, boolean];

post = [100, "Title", true];

let [id, title, state] = post;





//7


enum Game {
  Easy = 100,
  Medium = Easy -20 , 
  Hard = Medium - (Easy / 2),
  Insane = calc(10)
}

function calc(num: number) {
  return Game.Hard - num
}





//8


const user: {
   username: string,
  age: number | string,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: (string | number)[]
  }
} ={
    username : "Osama" , 
     age: 40,
     skills: {
  frontEnd: ["HTML", "CSS", "JS"],
  backEnd: ["PHP", "Python"]
}
  
}



user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);