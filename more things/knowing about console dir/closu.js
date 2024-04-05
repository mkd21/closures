function outer()
{
    const a = 23;
    const b = 12;
    const c = 78;
    function inner()              // closure will be formed only with b variable because it is being used by the inner function 
    {
        console.log(b);
    }

    return inner;
}


let res = outer();
console.dir(res);               // dir helps to see the details of the returned function