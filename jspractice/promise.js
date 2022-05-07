let p =new Promise((resolve,reject) =>{
    let x=1+2;
    if(x==2){
        resolve("success");
    }
    else{
        reject("failed");
    }

})

p.then(message =>{
    console.log(`this is resolved and ${message}`);
}).catch(message =>{

    console.log(`this is rejected and ${message}`);

})

