
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
// }

// let val = makeFunc();
// console.log(val);

/**
 * 10000 of lines of code has been written
 * 
 * after sometime we needed that function so called that function and will get the value of name variable without any doubt. That happens because of closure. Closures are the function which can access the parents scope even after it has been executed
 */

// val();




// function outer()
// {
//     debugger;
//     let a = 34;

//     inner = () => {
//         console.log(a);
//     }

//     inner();
// }

// outer();




// function f1()
// {
//     let a = 23;

//     function f2()
//     {
//         console.log(a);
//     }

//     return f2;
// }

// let res = f1();

// console.log(res);

// after sometime we needed that value of a. So we will be able to access it because of closure

// lets execute it 

// res();        // it will give 23 as output



// one cool way to write the same thing is like 

// function funk1()
// {
//     var c = 34;
//     return function funk2()
//     {
//         console.log(c);
//     }
// }

// let ans = funk1();
// console.log(ans);

// ans();



function f1()
{
    let a = 23;
    function f2()
    {
        let b = 10;
        function f3()
        {
            console.log(a , b);
        }
        
        return f3;
    }
    return f2;
}

let ans = f1();     // f2 stored hai ans variable me bina execute hue
let ans2 = ans();   // f2 execute hua mere pas f3 stored ho gaya

ans2();          // f3 ko call krnge ab