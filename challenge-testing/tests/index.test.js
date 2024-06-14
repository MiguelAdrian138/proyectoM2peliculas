const CarritoCompra = require("./index");

// Tests para el constructor
test("El constructor inicializa el carrito como un array vacío", () => {
  const carrito = new CarritoCompra();
  expect(carrito.productos).toEqual([]);
});

test("agregarProducto agrega un producto al carrito", () => {
  const producto = { nombre: "Producto 1", precio: 100 };
  const carrito = new CarritoCompra();

  carrito.agregarProducto(producto);

  expect(carrito.productos).toEqual([producto]);
});

test("agregarProducto aumenta la longitud del carrito", () => {
  const producto1 = { nombre: "Producto 1", precio: 100 };
  const producto2 = { nombre: "Producto 2", precio: 200 };
  const carrito = new CarritoCompra();

  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);

  expect(carrito.productos.length).toBe(2);
});

test("calcularTotal devuelve el precio total de un producto", () => {
  const producto = { nombre: "Producto 1", precio: 100 };
  const carrito = new CarritoCompra();

  carrito.agregarProducto(producto);

  expect(carrito.calcularTotal()).toBe(100);
});

test("calcularTotal devuelve el precio total de múltiples productos", () => {
  const producto1 = { nombre: "Producto 1", precio: 100 };
  const producto2 = { nombre: "Producto 2", precio: 200 };
  const carrito = new CarritoCompra();

  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);

  expect(carrito.calcularTotal()).toBe(300);
});

test("aplicarDescuento aplica el descuento correctamente al total", () => {
  const producto1 = { nombre: "Producto 1", precio: 100 };
  const producto2 = { nombre: "Producto 2", precio: 200 };
  const carrito = new CarritoCompra();

  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);

  carrito.aplicarDescuento(50);

  expect(carrito.calcularTotal()).toBe(150);
});
