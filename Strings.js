// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
// - Otra cadena de texto con tu Apellido
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
// - Una variable que contenga la primera letra del Nombre
// - Otra variable que contenga la última letra del Apellido
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

var nombre = " Marcos Matias "
var apellido = "Nieto"
var estudiante= nombre.concat(" ", apellido);
console.log(estudiante);
var estudianteMayus=estudiante.toUpperCase();
console.log(estudianteMayus)
var estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)
var estudianteCant = estudiante.length;
console.log(estudianteCant)
var nombrePriLet= nombre.substring(0,1);
console.log(nombrePriLet) 
var apellidoUltLet= apellido.slice(-1);
console.log(apellidoUltLet) 
var estudianteEsp = estudiante.trim();
console.log(estudianteEsp.length)
var estudianteBusq = estudiante.includes(nombre);
console.log(estudianteBusq)





