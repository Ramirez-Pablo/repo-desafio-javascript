const iva = x => x * 0.21
let precioproducto = prompt("precio del producto")
let descuento = prompt("ingrese descuento")
let precioconiva = precioproducto + iva(precioproducto)
let resultado = precioconiva - descuento
console.log(resultado)
alert (resultado)