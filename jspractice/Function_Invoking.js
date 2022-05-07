let calls=0;
function plus(x,y){
    calls++
    return x+y;
}

plus(3,2);
plus(1,2);
plus(5,6);


console.log(calls);
