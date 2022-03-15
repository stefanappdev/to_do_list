function add_item() {

	//document.createElement(<"ele">) to create a new element, document.createTextNode(<txt>) to create textnode to add to new element, 
	//then use <parent>.appendChild(child) ;

let item=document.querySelector("#item_name");
const new_item=document.createElement("li");
const menu=document.getElementById("Menu");

menu.appendChild(new_item);
new_item.textContent=item.value;

alert("New item added to menu");


item.value=" ";
	} 

	



function delete_item() {

//<ele>.remove(),<parentelement>.removeChild(<child>) are methods to delete html elements in js

let item=document.getElementById("item_name");
let li_list=document.querySelectorAll("#Menu>li");
const menu=document.getElementById("Menu");

for (let x in li_list){
	
	if (item.value===li_list[x].textContent){

		menu.removeChild(li_list[x]);
		alert("Item removed from list");
		item.value=" ";

		}



		}



} 


