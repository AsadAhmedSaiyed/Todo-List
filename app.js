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
