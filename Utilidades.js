// Archivo: utilidades.js

function calcularTotalCarrito(productos) {
    // Reduce el array sumando el calcularTotal() de cada objeto producto
    return productos.reduce((acumulador, producto) => {
        return acumulador + producto.calcularTotal();
    }, 0);
}

module.exports = {
    calcularTotalCarrito
};