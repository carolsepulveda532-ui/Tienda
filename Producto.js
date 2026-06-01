// Parte 2: Productos[cite: 1]

// 2.1 Clase base: Producto[cite: 1]
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() { // Retorna el precio con IVA incluido (19%)[cite: 1]
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje) { 
        // Retorna el precio con descuento aplicado sin modificar el precio original (this.precio)[cite: 1]
        return this.precio * (1 - porcentaje / 100);
    }

    resumen() { // Retorna nombre, categoría y precio base[cite: 1]
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio Base: $${this.precio}`;
    }

    tarjeta() { // Retorna el texto promocional con el precio con IVA incluido[cite: 1]
        return `Artículo: ${this.nombre} (${this.categoria}) - Precio: $${this.calcularTotal().toFixed(2)} COPS (IVA inc.)`;
    }
}

// 2.2 Clase extendida: ProductoDigital[cite: 1]
class ProductoDigital extends Producto { // Hereda de Producto[cite: 1]
    constructor(nombre, precio, licencia) {
        // Pasa los argumentos al padre. Se asigna una categoría general o fija[cite: 1]
        super(nombre, precio, "Digital"); 
        this.licencia = licencia; // Ejemplo: "mensual", "anual", "de por vida"[cite: 1]
    }

    calcularTotal() { // Sobreescribe calcularTotal(): los productos digitales en Colombia no aplican IVA[cite: 1]
        return this.precio;
    }

    tarjeta() { // Sobreescribe tarjeta() para incluir el tipo de licencia[cite: 1]
        return `Digital: ${this.nombre} [Licencia: ${this.licencia}] - Descarga inmediata por: $${this.calcularTotal().toFixed(2)} COPS`;
    }
}

// 2.3 Exportar el módulo[cite: 1]
module.exports = {
    Producto,
    ProductoDigital
};