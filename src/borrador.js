/**
 * Otra manera de manipular objetosm con Bracket Notation
 */

let persona = {
  nombre: "pepe",
  edad: 22,
};

// console.log( persona.nombre )
// console.log( persona["nombre"] )

const mostrarPropiedad = (propiedad) => {
  console.log(persona[propiedad]);
};

mostrarPropiedad("edad");

persona.apellido = "perez";
persona["nombre completo"] = "fulanito lopez";
console.log(persona);
