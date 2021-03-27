listArray = [];


let idElemento = 0;

let listElement = document.getElementById("lista");
listElement.setAttribute("style","list-style-type: none;");






function del(id){
	for(item of listArray){ //recorre el array de elementos item
		if (item.id == id) { //si el id coincide con el que le pasaron
			listArray.splice(listArray.indexOf(item),1); //elimina el elemento del array
			child = listElement.querySelector(`#${id}`);
			listElement.removeChild(child); //elimina el elemento de la ul
			console.log(listArray);
		}
	}
}


function tachar(id){
	for(item of listArray){
		if (item.id == id) {
			input = item.childNodes[0];
			input.setAttribute("style","text-decoration: line-through;")
		}
	}
}




function add(){


	item = document.createElement("li"); //crea el LI
	texto = document.createElement("input");// crea el P
	btnDel = document.createElement("button");//crea el boton de eliminar
	btnDid = document.createElement("button");

	item.appendChild(texto); //agrego el p a li
	item.appendChild(btnDel);//agrego el boton de eliminar al li
	item.appendChild(btnDid);//agrego el boton de completado al li
	listElement.appendChild(item);//agrego el item a la UL
	listArray.push(item);//agrego el elemento item a un array


	

	item.setAttribute("id",`item-${idElemento}`);//le asigno un id unico al item


	texto.setAttribute("placeholder","Escriba aquí");
	texto.setAttribute("style","width: 60%;");
	texto.setAttribute("style","display: inline-block;");




	btnDid.innerHTML = "Tachar";
	btnDid.setAttribute("onclick",`tachar("${item.id}")`);
	
	


	btnDel.innerHTML = "Eliminar";
	btnDel.setAttribute("onclick",`del("${item.id}")`); //llama a del con el parametro id unico del item 


	console.log(listArray);
	

	idElemento++;


	
	
}
