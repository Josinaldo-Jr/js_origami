// Liste 5 objetos nativos

// console.log((typeof Array.from !== "undefined"));
// console.log((typeof Function !== "undefined"));
// console.log((typeof String !== "undefined"));
// console.log((typeof console.log !== "undefined"));
// console.log((typeof Number !== "undefined"));


// Liste 5 objetos do browser
console.log((typeof alert !== "undefined"));
console.log((typeof window !== "undefined"));
console.log((typeof document !== "undefined"));
console.log((typeof innerHeight !== "undefined"));
console.log((typeof HTMLCollection !== "undefined"));

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if ( window.chrome !== "undefined") {
    console.log("Existe!");
} else {
    console.log("Não existe!");
}

if ( document.webkitIsFullScreen !== "undefined") {
    console.log("Existe!");
} else {
    console.log("Não existe!");
}
