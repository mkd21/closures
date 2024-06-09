let a = 4 ;
let b = 2;

function parent(){
    let b = 5;
    
    function add(){
        console.log(a + b);
    }

    return add;
}

let res = parent();

console.log(res);

res();

console.dir(res);