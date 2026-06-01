// Parte 1: Usuarios

// 1.1 Clase base: Usuario
class Usuario {
    constructor(nombre, email, rol = "cliente") { // El rol tiene un valor por defecto: "cliente"
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true; // Propiedad activo que inicia siempre en true
    }

    saludo() { // Retorna una presentación con nombre y rol
        return `Hola, mi nombre es ${this.nombre} y mi rol es ${this.rol}.`;
    }

    desactivar() { // Cambia activo a false y retorna un mensaje de confirmación
        this.activo = false;
        return `La cuenta del usuario ${this.nombre} ha sido desactivada.`;
    }

    resumen() { // Retorna nombre, email, rol y estado de la cuenta
        const estado = this.activo ? "activa" : "inactiva";
        return `Usuario: ${this.nombre} | Email: ${this.email} | Rol: ${this.rol} | Cuenta: ${estado}`;
    }
}

// 1.2 Clase extendida: UsuarioVIP
class UsuarioVIP extends Usuario { // Hereda de Usuario[cite: 1]
    constructor(nombre, email, membresia) {
        // Llama al constructor padre. El rol queda fijo como "cliente VIP"[cite: 1]
        super(nombre, email, "cliente VIP"); 
        this.membresia = membresia; // Ejemplo: "Gold", "Platinum"[cite: 1]
    }

    saludo() { // Sobreescribe saludo() para incluir la membresía usando super.saludo()[cite: 1]
        return `${super.saludo()} Mi nivel de membresía es ${this.membresia}.`;
    }

    beneficios() { // Retorna una descripción de las ventajas del nivel[cite: 1]
        return `Como miembro VIP nivel ${this.membresia}, tienes acceso a envíos gratis prioritarios y soporte 24/7.`;
    }
}

// 1.3 Exportar el módulo[cite: 1]
module.exports = {
    Usuario,
    UsuarioVIP
};