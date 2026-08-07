/*
 Data Types
   Literal Types
*/


// type nums  =0 | 1 | -1
// let numbers : nums = 0

// function compare(num1: number, num2: number): nums{
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1



// let article : [number , string , boolean] = [11 , "one" , true]



// function error(message: string): never {
//   throw new Error(message);
// }

// error("Something wrong");


// function infiniteLoop(): never {
//   while (true) {
//     console.log("Running");
//   }
// }







const easy = 9 ;
const meduim = 6;
const hard = 3; 


enum kids{
five =25 , 
seven =20 , 
ten =15,
}

enum level {
  kid =kids.five  , 
  easy =9 , 
  meduim =6, 
  hard =3
}



//let all : number | string = 100 ;

type A = {
  one :string
  two : number,
  three : boolean
}


function getAction(btns: A ){
  console.log(btns.one)
  console.log(btns.two)
  console.log(btns.three)
}


getAction ({
  one:"string" , 
  two : 100 ,
  three : true
})



let myobject : {username : string} = {username :"Ali"};




interface User {
  id : number,
  username : string ,
  country : string ,
  sayhello () : string 
}


let user : User ={
  id : 100 ,
  username : "ali",
  country : "egypt",
  sayhello(){
    return "${this.username}"
  }
}