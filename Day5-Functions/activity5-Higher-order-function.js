// Task 9

function greet(){
    console.log("Hello, world!");
}

function repeat(fn, count){
    for(let i=0; i<count; i++){
        fn()
    }
}

repeat(greet, 3)

// Task 10

function addition(num){
    return num + num;
}
function mul(num){
    return num * num;
}

function total(num, addition, mul){
    const sum = addition(num);
    const tot = mul(sum);
    return tot;
}

console.log(total(3,addition, mul));