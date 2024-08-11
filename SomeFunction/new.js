// var b =40;
// {
//    var b=20;

//     // let a=20  //Local Acces
// }
// // console.log(a);
// console.log(b);


////////////////////////////////////////////////////////////////////////////////////


///callback Function


// function outer(a) {
//     console.log('hey!');
//     console.log(a);
//     a()


// }

// outer(function innner(){
//     console.log('innner');
// })


//<--------------------------------------------------------------------------------------->

// console.log('one');
console.log('two');

// setTimeout(()=>{              //Web API 
//     console.log('one');
// },2000000000000)


// setTimeout(()=>{
//     console.log('Four');
// }, 300)

// setTimeout(()=>{
//     console.log('five');
// },100)

// setInterval(()=>{
//     console.log('Vishu');
// },2000)

// setInterval(()=>{
//     console.log('Rahul');
// },1000)

// clearInterval(()=>{

// },5000)

// setInterval(()=>{
//     console.log('hehehehe');
// })

//console.log('Three');

//<---------------------------------------------------------------------------------------->


var i=0;

while(i!=10) {
    let id = setInterval(()=>{
        console.log('Rahul');
    })
}
i++;

clearInterval(id);





















