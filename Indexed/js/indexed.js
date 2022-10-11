var bd;
function iniciar(){
	zonadatos=documen.getElementById("zonadatos");

	boton=document.getElementById("guardar");

	bton.addEventListener("click",agregarobjeto,false);

	var solicitud=indexedDB.open("ejemplo");

	solicitud.onsuccess=function(e){

		bd=e.target.result;
	}

	solicitud.onupgradeneeded=function(e){

		bd=e.target.result;
		bd.createObjectStore("persona", {keyPath:"contraseña"});
	}


}


function agregarObjeto(){
	var clave=document.getElementById("clave").value;
	var titulo=document.getElementById("texto").value;
	var fecha=document.getElementById("fecha").value;

	var transaccion=bd.transaction(["persona", "redwrite"]);
	var almacen=transaccion.objectStore("persona");

	var agregar=almacen.add({clave: clave, titulo: titulo, fecha:fecha})
}









window.addEventListener("load",iniciar,false);