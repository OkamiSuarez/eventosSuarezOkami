const mostrarProductos = () => {
    const contenedor = document.getElementById("producto-contenedor");

    datosProductos.forEach( producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<div class="card-image">
                            <img src=${producto.img}>
                            <span class="card-title">Producto: ${producto.nombre}</span>
                            <br>
                            <span class="card-title">Precio: ${producto.precio}</span>
                        </div>
                        `
        contenedor.appendChild(div);
    });
};

mostrarProductos();