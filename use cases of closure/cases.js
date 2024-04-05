function funk()
{
    let username = "Mayank";

    function callBackfunk()
    {
        console.log(username);
    }

    console.dir(callBackfunk);    //   will show the closure of this function with it's parent variable
    setTimeout(callBackfunk , 2000);      
}

funk();

// what happended here?

// after assigning setTimeout this funtion ended and was remove from call stack.

// after 2 sec setTimeout  was called and was able to access the function and that function was able to acess the variable of it's parent. 

// these all thing happend because of closure 