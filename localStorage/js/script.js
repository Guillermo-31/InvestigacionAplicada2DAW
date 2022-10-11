function initializar(){
    document.getElementById("add").addEventListener("click", function(){
        add();
    })

    document.getElementById("eliminar").addEventListener("click", function(){
        eliminar();
    })

    document.getElementById("limpiar").addEventListener("click", function(){
        limpiar();
    })

    let tabla = document.getElementById("datos");

    mostrar();
}

function add(){
    let estudiante = document.getElementById("estudiante").value;
    let promedio = document.getElementById("promedio").value;
    let expNom = /^[a-zA-Z\u00C0-\u017F\s]+$/;

    if (!validar(estudiante, promedio, expNom))
        return 0;

    promedio = Number(promedio).toFixed(2);
    if (localStorage.getItem(estudiante)) {
        alerta('success', '¡Éxito!', 'Se editó el estudiante con éxito');
    } else {
        alerta('success', '¡Éxito!', 'Se agregó el estudiante con éxito.');
    }

    localStorage.setItem(estudiante, promedio);
    mostrar();
}

function eliminar(){
    const estudiante = document.getElementById("estudiante").value;

    if (localStorage.getItem(estudiante)) {
        localStorage.removeItem(estudiante);
        alerta('success', '¡Éxito!', 'Se eliminó el estudiante con éxito.');
    } else {
        alerta('error', '¡Error!', 'El estudiante no existe.');
    }
    mostrar();
}

function mostrar(){
    let tabla = document.getElementById('datos');
    tabla.innerHTML = "<table id='tablaResul'><tr class='filaTit'><td class='titulo'>Estudiante</td><td class='titulo'>Promedio</td></tr>";
    tabla = document.getElementById('tablaResul');
    if (localStorage.length === 0){
        console.log("No hay nada");
        return 0;
    }else{
        console.log("hay algo");
        for (let index = 0; index < localStorage.length; index++){
            console.log(localStorage.key(index).toString());
            const key = localStorage.key(index);
            let tdNom = localStorage.key(index).toString();
            console.log(tdNom);
            let tdProm = localStorage.getItem(key).toString();
            console.log(tdProm);
            if (index%2 == 0)
                tabla.innerHTML += "<tr class='filaCuerpo-Impar'><td class='cuerpo'>"+tdNom+"</td><td class='cuerpo'>"+tdProm+"</td></tr>";
            else
                tabla.innerHTML += "<tr class='filaCuerpo-Par'><td class='cuerpo'>"+tdNom+"</td><td class='cuerpo'>"+tdProm+"</td></tr>";
        }
        tabla.innerHTML += "</table>";
    }
}

function limpiar(){
    localStorage.clear();
    alerta('success', '¡Éxito!', 'Se limpiaron todos los datos');
    mostrar();
}

function validar(estudiante, promedio, expNom){
    if (!expNom.test(estudiante) || estudiante == ""){
        alerta('error', '¡ERROR!','Ha ingresado un nombre inválido.');
        return false;
    }else if ((promedio < 0 || promedio > 10) || promedio == ""){
        alerta('error', '¡ERROR!', 'Ha ingresado un promedio inválido.');
        return false;
    }

    return true;
}

function alerta(tipo, titulo, texto){
    Swal.fire({
        icon: tipo,
        title: titulo,
        text: texto
    })
}

window.onload = initializar;