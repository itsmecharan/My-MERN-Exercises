let img1=document.getElementById("bd1");
let img2=document.getElementById("bd2");
let img3=document.getElementById("bd3");
let img4=document.getElementById("bd4");
let img5=document.getElementById("bd5");
img1.addEventListener('click',() =>{
    document.getElementById("displayimg").innerHTML=`<img  src="images/bird1.jpg" width="500" 
    height="500">`
})
img2.addEventListener('click',()=>{
    document.getElementById("displayimg").innerHTML=`<img  src="images/bird2.png" width="500" 
    height="500">`
})
img3.addEventListener('click',() =>{
    document.getElementById("displayimg").innerHTML=`<img src="images/bird3.jpg" width="500" 
    height="500"> `
})
img4.addEventListener('click',() =>{
    document.getElementById("displayimg").innerHTML=`<img  src="images/bird4.jpg" width="500" 
    height="500">`
})
img5.addEventListener('click',() =>{
    document.getElementById("displayimg").innerHTML=`<img  src="images/bird5.jpg" width="500" 
    height="500">`
})
