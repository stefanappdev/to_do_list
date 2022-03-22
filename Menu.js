function handle_item() {

	//document.createElement(<"ele">) to create a new element, document.createTextNode(<txt>) to create textnode to add to new element, 
	//then use <parent>.appendChild(child) ;


let menu=document.getElementById("Menu");
let item=document.querySelector("#item_name");
let menuitem=document.createElement("li");
let par=document.createElement("p");
let div=document.createElement("div");
let del=document.createElement("button");
let edit=document.createElement("button");
del.textContent="delete";
edit.textContent="edit";
par.textContent=item.value;
div.appendChild(par);
div.appendChild(del);
div.appendChild(edit);


//handles delete functionality of itms
del.addEventListener("click",()=>{
menu.removeChild(menuitem);
alert("item removed from menu");
item.value="";
		});


//handle for edit button 
edit.addEventListener("click",()=>{

let editbar=document.createElement("input");
editbar.setAttribute("type","text");
let ok=document.createElement("button");
ok.textContent="Ok";
div.insertBefore(editbar,del);//inssert editbar before button
div.insertBefore(ok,del);
edit.setAttribute("style","visibility:hidden");
del.setAttribute("style","visibility:hidden");

//after clicking ok
ok.addEventListener("click",()=>{
par.textContent=editbar.value;
ok.remove();
editbar.remove();
edit.setAttribute("style","visibility:visible");
del.setAttribute("style","visibility:visible");
alert(" An item has been updated");
		})
		

		});



menuitem.appendChild(div);

menu.appendChild(menuitem);
alert("Item added to list");
item.value="";
	
} 


