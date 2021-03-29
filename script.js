listArray = [];


let idElemento = 0;

let listElement = document.getElementById("lista");
listElement.setAttribute("style","list-style-type: none;");






function ind(id){
	for(item of listArray){
		if (item.id == id) {
			flecha = item.childNodes[0];
			if (item.getAttribute("sub") == "false") {
				item.setAttribute("style","margin-left: 30px;");
				flecha.setAttribute("src","img/flechaIzq.jpg");
				item.setAttribute("sub","true");
			}
			else{
				item.setAttribute("style","margin-left: 0x;");
				flecha.setAttribute("src","img/flechaDer.jpg");
				item.setAttribute("sub","false");
			}
			
		}
	}
}


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
			input = item.childNodes[2];
			checked = item.childNodes[1];
			if (item.getAttribute("tachado") == "false" && input.value != "") {
				input.setAttribute("style","text-decoration: line-through;");
				item.setAttribute("tachado","true");

				cont = listArray.indexOf(item);
				element = listArray[cont]; //agarra el item actual
				
				if (element.getAttribute("id") != `item-${listArray.length - 1}`) { // si no es el ultimo elemento, checkea por sub
					while(true){ 

						cont ++;
						console.log(cont);
					subElement = listArray[cont]; //agarra el item siguiente
					if (subElement.getAttribute("sub") == "true" && element.getAttribute("sub") == "false") { //si no esta indentado y sus hijos si, los tacha
						subInput = subElement.childNodes[2];
						subChecked = subElement.childNodes[1];
						subInput.setAttribute("style","text-decoration: line-through;");
						subElement.setAttribute("tachado","true");
						subChecked.checked = true;
						

						if (cont == listArray.length - 1){ //si llego al final del array, sale del loop
							break;
						}
					}
					else{ //si no esta indentado, termina el loop
						break;
					}
					
					
					
					
				}
			}

		}
		else{
			input.setAttribute("style","text-decoration: none;");
			item.setAttribute("tachado","false");




		}

	}
}
}




function add(){

	toAdd = document.getElementById("toAdd");

	if (toAdd.value == "") {
		alert("No se puede agregar un item vacio!");
	}else{

		item = document.createElement("li"); //crea el LI
	texto = document.createElement("input");// crea el P
	btnDel = document.createElement("button");//crea el boton de eliminar
	btnDid = document.createElement("input");
	btnSub = document.createElement("input");




	item.appendChild(btnSub);
	item.appendChild(btnDid);//agrego el boton de completado al li
	item.appendChild(texto); //agrego el p a li
	item.appendChild(btnDel);//agrego el boton de eliminar al li
	
	listElement.appendChild(item);//agrego el item a la UL
	listArray.push(item);//agrego el elemento item a un array


	

	item.setAttribute("id",`item-${idElemento}`);//le asigno un id unico al item
	item.setAttribute("sub","false");
	item.setAttribute("tachado","false");



	texto.setAttribute("value",`${toAdd.value}`)
	texto.setAttribute("placeholder","Escriba aquí");
	texto.setAttribute("style","width: 60%;");
	texto.setAttribute("style","display: inline-block;");




	btnDid.innerHTML = "Tachar";
	btnDid.setAttribute("type","checkbox");
	btnDid.setAttribute("onclick",`tachar("${item.id}")`);
	
	
	btnSub.setAttribute("type","image");
	btnSub.setAttribute("src","img/flechaDer.jpg");
	btnSub.setAttribute("width","15px");
	btnSub.setAttribute("height","15px");
	btnSub.setAttribute("onclick",`ind("${item.id}")`);
	


	btnDel.innerHTML = "Eliminar";
	btnDel.setAttribute("onclick",`del("${item.id}")`); //llama a del con el parametro id unico del item 


	toAdd.value = "";


	console.log(listArray);
	

	idElemento++;

}






}
