// console.log(a);
//  var a = 5;

//Hoiesting => By default nature of it will automatically difine a variable in top
//  var a;
//console.log(a);
//a=5

//A function is called before its declacration then it will give you a output
// because of (HOIESTING)  concept it will automaticaly define function body before function called


// sum();
// function sum(){
//     console.log('hehehe');
// }


 //////////////////////////////////////////////////////

//  sum();

// var sum=()=>{
//     console.log('hehehe');
// }

//sum();


///////////////////////////////


// var a =5;
// console.log(a);

/////////////////////////////////

// console.log(a);
//  let a=5;        //Temporal Dead Zone => Variable Exists but can not accessed until its declared  


//This is the hosting concept of let 
// let a;
// console.log(a);
// a=5;





//<-------------------------------------------------------->

// console.log(a);
// a=12;
// let a;


//<----------------------------------------->


// let arr = [1,2,3,4,5,6,6]

// let fillltereddvalue= arr.filter((a,b,c) => {
//     return a>4;
// })

// console.log(fillltereddvalue);

// let arr = [1,2,3,4,5,6,6]

// let fillltereddvalue= arr.filter((a,b,c) => {
//     return a<6;
// })

// console.log(fillltereddvalue);


//<--------------------------------------------------------------------------->

// let newA= arr.map( (a,b,c) => {               //Map Function
//     console.log(a);                       //Create a New Array
//     return a;                   // Isme return hota hai Differernce between map and forEach
// })

//arr.forEach((a,b,c)=>{              //For each loop
//console.log(a);      //Value
//console.log(b);       //index
//console.log(c);       // Both value and index    //Isme return nahi hota hai 

//})


//<------------------------------------------------------------------------------------->


//Some function 

// let data = Math.random()*100;
// console.log(Math.floor(data));

// console.log(new Date().toLocaleTimeString());
// console.log();