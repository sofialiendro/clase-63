const tarjeta = document.querySelector("article");

const persona = {
  nombreCompleto: {
    nombre: "Macarena",
    apellido: "Reale"
  }, 
  edad: 26, 
  profesiones: ["diseñadora", "emprendedora", "actriz", "programadora"],
  sabeProgramar: true,
  ofreceEnvioGratuito: true,
}



tarjeta.innerHTML = `
<div>
  <h1>${persona.nombreCompleto.nombre}</h1>
  <h2>${persona.edad}</h2>
  <div>${persona.edad > 18 ? "es mayor de edad" : "no es mayor de edad"}</div>
  <h3>${persona.profesiones.join(", ")}</h3>
</div>
`


/////////////////////
// map 

// metodos
// los metodos son funciones, funciones nativas al lenguaje 
// pueden recibir parametros, y pueden retornar algo



const edades = [4, 87, 35, 99, 65, 12]

// de aca a
// const funcionParaMap = (elemento) => {
//   return elemento * 10
// }

// const nuevaCosa = edades.map(funcionParaMap)

// const nuevaCosa = edades.map((elemento) => {
//   return elemento * 10
// })
// ACA, son equivalentes!!!






// const funcionParaMap = (el, i, arr) => {
//   console.log(el, i, arr)
//   return elemento * 10
// }

// const nuevoArray = edades.map(funcionParaMap)

const nuevoArray = edades.map((elemento) => {
  if (elemento > 18) {
   return elemento 
  }
  else {
    return "elemento menor a 18"
  }
})

console.log(edades)
console.log(nuevoArray)



/// EJERCICIOS


// 4
// Tenemos un array en una variable libros con libros para leer sobre Javascript.
// Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
// Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>

const librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

// codear acá la solución del ejercicio

listaDeLibros = librosDeJS.map((elemento) => {
  return `<li>${elemento}</li>`
})

const lista = `<ul>${listaDeLibros}</ul>`

console.log(`<ul>${listaDeLibros}</ul>`)

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>



// 6
// Tenemos un array en una variable playlist con una lista de canciones de un disco.
// Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.
// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

/// completá acá el código





// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]