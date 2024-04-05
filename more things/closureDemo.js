// function outer()
// {
//     let outerVariable = "I am outer Variable";
//     function inner()
//     {
//         console.log(outerVariable);
//     }

//     return inner;
// }


// let res = outer();
// console.log(res());

function outer()
{
    let a = 23;
    let b = 12;
    let c = 78;
    function inner()              // closure will be formed only with b variable because it is being used by the inner function 
    {
        console.log(b);
    }

    return inner;
}


let res = outer();
console.log(res());