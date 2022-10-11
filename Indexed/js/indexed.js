var bd;
function iniciar(){
	zonadatos=document.getElementById("zonadatos");

	boton=document.getElementById("guardar");

	boton.addEventListener("click",agregarObjeto,false);

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

	var agregar=almacen.add({clave: clave, titulo: titulo, Fecha:fecha});

	document.getElementById("clave").value=""
	document.getElementById("texto").value=""
	document.getElementById("fecha").value=""
}









window.addEventListener("load",iniciar,false);