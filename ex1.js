function outer()
{
    let i = 12;
    let j = [3 , 6 , 4];
    let k = 89;

    function inner()
    {
        i =+ 2;
        console.log(j);
        return i;
    }

    return inner;
}

let x = outer();
obj = { funk : x};
console.log(obj);   // go to console of browser ans see the object 