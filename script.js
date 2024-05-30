// punto 1
let menuItems = [
    {nombre: 'Hamburguesa', descripcion: 'Hamburguesa super con queso y tocineta.', precio: 12.000},
    {nombre: 'Picada', descripcion: 'Picada para dos personas.', precio: 15.000},
    {nombre: 'Pizza', descripcion: 'Pizza mexicana personal.', precio: 10.000},
    {nombre: 'Tanarepa', descripcion: 'Arepa rellena de carne con maiz, chicharron, queso derretido.', precio: 15.000},
    {nombre: 'Perro', descripcion: 'perro con queso derretido, ensalada, papas, y salsas.', precio: 9.000}
];

// punto 2
const mostrarMenu = () => {
      let menuList = document.getElementById("menu-list");
      menuItems.forEach((item) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${item.nombre} - $ ${item.precio.toFixed(3)} \n ${item.descripcion}`;
      listItem.addEventListener("click", () => {
          agregarAlPedido(item.nombre, item.descripcion, item.precio);
        });
        
        menuList.appendChild(listItem);
    });
}
mostrarMenu();

// punto 3
const agregarAlPedido = (nombre, descripcion, precio) => {
    if (precio !== undefined) {
      let pedidoResumen = document.getElementById("pedido-resumen");
      let listDiv = document.createElement("p");
      listDiv.innerHTML = `${nombre} - $ ${precio.toFixed(3)} \n ${descripcion}`;
      pedidoResumen.appendChild(listDiv);
      
      let costoTotal = calcularCostoTotal();
      document.getElementById("total-cost").textContent = `$ ${costoTotal.toFixed(3)}`;
    } else {
        console.error("El artículo seleccionado no tiene un precio definido.");
    }
}

// punto 4
document.getElementById("pedido-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
  
    if (nombre.trim() === "" || direccion.trim() === "" || telefono.trim() === "") {
        alert("Complete todos los campos obligatorios marcados con un '*' al final.");
        return;
    }else{
        alert("¡Pedido enviado con éxito!");
    }
});

// punto 5
const calcularCostoTotal = () => {
    let totalCosto = 0;
    let pedidoResumen = document.getElementById("pedido-resumen").childNodes;
    pedidoResumen.forEach((item) => {
        var precio = parseFloat(item.textContent.split("$")[1]);        
      if (!isNaN(precio)) {
        totalCosto += precio;
      }
    });
    return totalCosto;
}

// punto 7
const obtenerDetallesPedido = () => {
    let detalles = "";
    let pedidoResumen = document.getElementById("pedido-resumen").childNodes;
    pedidoResumen.forEach((item) => {
        detalles += item.textContent.trim() + "\n";
    });
    return detalles;
}

const btnEnviar = document.getElementById('btn').addEventListener('click', () =>{
    let costoTotal = calcularCostoTotal();
    let detallesPedido = obtenerDetallesPedido();
    
    alert(`Total costo: $ ${costoTotal.toFixed(3)}\nDetalles del pedido:\n ${detallesPedido}`);
});




