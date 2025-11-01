let listaCompras = ["televisor", "licuadora", "microondas"];
let total = 0;
let productos = new Map([["televisor", 450], ["lavadora", 700],
    ["microondas", 120], ["refrigerador", 900], ["licuadora", 80]]);

for (let producto of listaCompras) {
  total += productos.get(producto);
}
console.log(`Precio total: S/.${total.toFixed(2)}`);
