let i = 0;
function fun()
{
    // let i = 0;

    function innerFunction()
    {
        i += 1;
        return i;
    }

    return innerFunction;
}

let res = fun();

console.log(res);

console.log("first time value",res());
console.log("second time value",res());
console.log("third time value",res());