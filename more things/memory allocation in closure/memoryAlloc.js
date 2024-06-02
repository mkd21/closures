// function parent(num)
// {
//     let a = num;
//     let b = 34;

//     function child()
//     {
//         console.log(a , b);
//     }

//     return child;
// }

// let res1 = parent(12);              // iska memory alag rhega
// let res2 = parent(45);             //  iska memory alag rhega

// res1();
// res2();


// function grandParent()
// {
//     let a = 23;

//     function parent()
//     {
//         let b = 12;

//         function child()
//         {
//             console.log(a , b);
//         }

//         return child;
//     }
    
//     let res1 = parent();

//     console.dir(res1);
// }

// grandParent();


// in above function , 2 closure will be formed . one with parent and 2nd one with grandParent 


                        // PROOF THAT KI MEMORY LOCATION IS NOT SAME 


function parent()
{
    let a = 0;

    function child()
    {
        a++;
    }

    return child;
}

let res1 = parent();
let res2 = parent();

console.dir(res1);
console.dir(res2);

res1();               // will increment the value of res1 only. the value of res2 will be same

res2();   // now the value will increment
res2();  // now the value will increment

// console.dir(res1);
// console.dir(res2);