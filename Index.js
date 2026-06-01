// Parte 3: Conectar todo en index.js

// 3.1 Importar los módulos (la ruta empieza con ./ porque están en la misma carpeta)
const { Usuario, UsuarioVIP } = require('./usuario');
const { Producto, ProductoDigital } = require('./producto');

// 3.2 Simular la tienda

console.log("=== 1. CREACIÓN DE INSTANCIAS ===");
// Usuarios
const cliente1 = new Usuario("Carlos Pérez", "carlos@mail.com");
const admin1 = new Usuario("Ana Gómez", "ana@tienda.com", "administrador");
const vip1 = new UsuarioVIP("Carol Sepúlveda", "carol@premium.com", "Platinum");

// Productos
const zapato = new Producto("Zapatillas Running", 120000, "Calzado");
const morral = new Producto("Morral Magnético", 85000, "Accesorios");
const cursoJava = new ProductoDigital("Master en Java & Spring Boot", 250000, "de por vida");
const antivirus = new ProductoDigital("Antivirus Total", 45000, "anual");

console.log("Instancias creadas con éxito.\n");

console.log("=== 2. DESACTIVAR UN USUARIO ===");
// Desactivamos al cliente regular
console.log(cliente1.desactivar());
console.log(cliente1.resumen());
console.log("");

console.log("=== 3. APLICAR DESCUENTO A UN PRODUCTO FÍSICO ===");
const descuentoPorcentaje = 20;
const precioConDescuento = morral.aplicarDescuento(descuentoPorcentaje);
console.log(`El precio original de "${morral.nombre}" es: $${morral.precio}`);
console.log(`Con el ${descuentoPorcentaje}% de descuento queda en: $${precioConDescuento}`);
console.log(`Verificación de no-mutación (precio original sigue siendo): $${morral.precio}`);
console.log("");

console.log("=== 4. TARJETAS DE TODOS LOS PRODUCTOS ===");
console.log(zapato.tarjeta());
console.log(morral.tarjeta());
console.log(cursoJava.tarjeta());
console.log(antivirus.tarjeta());
console.log("");

console.log("=== 5. RESUMEN DE TODOS LOS USUARIOS ===");
console.log(cliente1.resumen());
console.log(admin1.resumen());
console.log(vip1.resumen());
// Probamos también su saludo especial VIP
console.log(`-> Saludo VIP especial: ${vip1.saludo()}`);

const { calcularTotalCarrito } = require('./utilidades');

console.log("\n=== RETO ADICIONAL: CARRITO DE COMPRAS ===");
const carrito = [zapato, morral, cursoJava];
const totalPagar = calcularTotalCarrito(carrito);
console.log(`Total a pagar por los 3 productos en el carrito (con IVA correspondiente): $${totalPagar.toFixed(2)}`);