function intializar(){
    document.getElementById("add").addEventListener("click", function(){
        add();
    })

    document.getElementById("eliminar").addEventListener("click", function(){
        eliminar();
    })

    document.getElementById("mostrar").addEventListener("click", function(){
        mostrar();
    })

    document.getElementById("limpiar").addEventListener("click", function(){
        limpiar();
    })
}

function add(){
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

    if (clave != "") {
        if (localStorage.getItem(clave)) {
            document.getElementById("mensaje").innerHTML = "<p>Se edito el registro</p>";
        } else {
            document.getElementById("mensaje").innerHTML = "<p>Se añade al registro</p>";
        }

        localStorage.setItem(clave, valor);
    }else {
        document.getElementById("mensaje").innerHTML = "<p>Clave de tener un valor</p>";
    }
}

function eliminar(){
    const clave = document.getElementById("clave").value;

    if (localStorage.getItem(clave)) {
        document.getElementById("mensaje").innerHTML = "<p>Se elimino el registro</p>";
        localStorage.removeItem(clave)
    } else {
        document.getElementById("mensaje").innerHTML = "<p>No existe la clave</p>";
    }
}

window.onload = init;