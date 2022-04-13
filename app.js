function handle_item() {

	//document.createElement(<"ele">) to create a new element, document.createTextNode(<txt>) to create textnode to add to new element, 
	//then use <parent>.appendChild(child) ;


let to_do_list=document.getElementById("to_do_list");
let item=document.querySelector("#item_name");


if (item.value==""){
	
	alert("No activity detected, please enter an activity");
		}	
		


else{
	
let to_do_item=document.createElement("li");
let par=document.createElement("p");
let div=document.createElement("div");
let del=document.createElement("button");
let edit=document.createElement("button");
del.textContent="delete";
edit.textContent="edit";
par.textContent=item.value;
let status=stat();

div.setAttribute("id","items_col");
status.setAttribute("id","status_col");

div.appendChild(par);
div.appendChild(del);
div.appendChild(edit);



to_do_item.appendChild(div);
to_do_item.appendChild(status);

to_do_list.appendChild(to_do_item);
alert("Item added to list");
item.value="";


//handles delete functionality of itms
del.addEventListener("click",()=>{
	to_do_list.removeChild(to_do_item);
	alert("item removed from to_do_list");
	item.value="";
		});


//handle for edit button 
edit.addEventListener("click",()=>{

		let editbar=document.createElement("input");
		editbar.setAttribute("type","text");
		editbar.value=par.textContent;

		let ok=document.createElement("button");
		ok.textContent="Ok";
		div.insertBefore(editbar,del);//inssert editbar before button
		div.insertBefore(ok,del);
		edit.setAttribute("style","visibility:hidden");
		del.setAttribute("style","visibility:hidden");
		
		

//handle for ok button 
		ok.addEventListener("click",()=>{

		//checks if editbaar has an actual value
		if (editbar.value==""){
			
			par.textContent=par.textContent;
			
			}
			
		else{
			par.textContent=editbar.value;
			}

		ok.remove();
		editbar.remove();
		edit.setAttribute("style","visibility:visible");
		del.setAttribute("style","visibility:visible");
		alert(" An item has been updated");
				})
		

		});


	}
	
} 




function stat(){
	
		let completed=document.createElement("input");
		let pending=document.createElement("input");
		let clabel=document.createElement("label");
		let plabel=document.createElement("label");
		let status=document.createElement("div");
		
		
		
		
		status.setAttribute("id","status");
		
		completed.setAttribute("type","checkbox");
		completed.setAttribute("value","completed");
		completed.setAttribute("name","completed");
		completed.setAttribute("id","completed");
		
		pending.setAttribute("type","checkbox");
		pending.setAttribute("value","pending");
		pending.setAttribute("name","pending");
		pending.setAttribute("id","pending");
		
		clabel.textContent="Completed";
		
		plabel.textContent="Pending";
		
		clabel.appendChild(completed);
		plabel.appendChild(pending);
		
		status.appendChild(clabel);
		status.appendChild(plabel);
	
		return status;
		
		
		}