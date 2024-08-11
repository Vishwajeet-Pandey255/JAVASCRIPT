//<------------------CallBack Hell--------------------------->
function step1(fn){
    console.log('hehehe');
    setTimeout(()=>{
        console.log('Photo Selected');
        fn();
    },5000)
    // step2();
}

function step2(fn){
    setTimeout(()=>{
        console.log('Filtered');
        fn();
    },6000)
    // step3()
}

function step3(fn){
    setTimeout(()=>{
        console.log('Captionenssss');
        fn();
    },3000)
}

function step4(fn){
    setTimeout(()=>{
        console.log('Photo Posteddddd');
        fn();
    },2000)
}

//callback Hell
step1(()=>{
   step2(()=>{
    step3(()=>{
        step4(()=>{

        })
    })
   })
})

//////////////////////////////////////////////////////////////



//<--------------------------------------PROMISES-------------------------->

// let promise= new Promise((res,rej)=>{
//     res();

//     setTimeout(()=>{
//         rej();
//         res();
//     })
// },4000)

// console.log('hellllow');

//////////////////////////////////////////////////////////

// let promise = new Promise((res,rej)=>{
//     let reason='barish';
//     if(reason==='barish'){
//         rej();
//     }
//     else{
//         res();
//     }
// })

// promise.then(()=>{        //for succes
//     console.log('resolve');
// }).catch(()=>{              //for failure
//     console.log('errrrrr');
// })


//////////////////////////////////////////////////////////////

// let step1=  function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('photo select ho gyii')
//         },4000)
//     })
// }


// let step2=  function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('filterrred')
//         },4000)
//     })
// }


// step1().then((data)=>{
//     console.log(data);
//     return step2().then((filtered)=>{
//         console.log(filtered);
//     })
// })