// const addd=(a=20,b=50)  =>  {
//     var c =10;
//     console.log(a+b);
// }

// addd(5);   //55


 //let arr =[12,3,4,5,66,8]

// //  arr.pop()
// //  arr.push(8)
// //  console.log(arr);
 //arr.shift()
// arr.unshift(400)
// console.log(arr);

// console.log(arr.includes(66));



//Object Declaration in JavaScript

// let a={
//     id:10,
//     firstName:'hellow',
//     isPass:true
// }
// console.log(a.id);
// console.log(a.firstName);



// function cal(num1 , num2)  {

//     let obj={
//     sum:num1+num2,
//     minus:num1-num2,
//     malti:num1*num2
// }
// return obj
// }

// let a = cal(5,6)
// console.log(a);
// // console.log(a.sum);



//Function inside the Object

// let obj ={
//     a:10,
//     b:40,
//     sum:function(){
//         console.log(this,"yha peee");
//         return this.a+this.b
//     }

// }
// console.log(obj.sum());



function cal() {

    let obj={
        id:1,
        name:"Vishwajeet",
        lastname:"Pandey",
        phoneNumber:9696737683,
        email_id:"pandeyvishwajeet61_gmail.com",
         Addresh:"Bhopal",
         Father_name:"Vijay_Pandey",
         Mother_name:"Meena_Devi"
    }
    return obj
}

let a = cal();

// console.log(`My FirstName is: ${a.name}  ${a.lastname}`);
console.log(a);
