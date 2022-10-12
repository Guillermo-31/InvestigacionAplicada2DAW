var bd;
function iniciar(){
	zonadatos=document.getElementById("zonadatos");

	button=document.getElementById("Guardar");

	button.addEventListener("click",agregarObjeto,false);

	var solicitud=indexedDB.open("ejemplo");

	solicitud.onsuccess=function(e){

		bd=e.target.result;
	}

	solicitud.onupgradeneeded=function(e){

		bd=e.target.result;
		bd.createObjectStore("persona", {keyPath:"clave"});
	}


}


function agregarObjeto(){
	var clave=document.getElementById("clave").value;
	var titulo=document.getElementById("texto").value;
	var Fecha=document.getElementById("fecha").value;

	var transaccion=bd.transaction(["persona"], "readwrite");
	var almacen=transaccion.objectStore("persona");

	var agregar=almacen.add({clave: clave, titulo: titulo, Fecha:Fecha});

	agregar.addEventListener("success",mostrar,false);

	document.getElementById("clave").value=""
	document.getElementById("texto").value=""
	document.getElementById("fecha").value=""
}

function mostrar(){

	zonadatos.innerHTML="";

	var transaccion=bd.transaction(["persona"], "readonly");
	var almacen=transaccion.objectStore("persona");
	var cursor=almacen.openCursor();

	cursor.addEventListener("success", mostrarDatos, false);

}


function mostrarDatos(e){
	var cursor=e.target.result;
	if (cursor) {
		zonadatos.innerHTML+="<div>"+ cursor.value.clave+"-"+ cursor.value.titulo+"-"+ cursor.value.fecha+"</div>";
		cursor.continue();
	}
}






window.addEventListener("load",iniciar,false);