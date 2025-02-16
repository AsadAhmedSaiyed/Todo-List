//event bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     }); 
// }




//Todo

let inp = document.querySelector("#addtask");
let btn = document.querySelector("#add");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    let br = document.createElement("br");
    let del = document.createElement("button");
    
    del.innerText = "Delete";
     del.style.marginLeft = "5px";
     del.addEventListener("click",function(){
      li.remove();
     });

    li.innerText = inp.value;
    ul.appendChild(li); 
    li.appendChild(del);
    ul.appendChild(br);

    inp.value = "";          
});