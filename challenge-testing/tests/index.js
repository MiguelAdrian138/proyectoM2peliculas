class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  }

  aplicarDescuento(porcentaje) {
    this.productos.forEach(producto => {
      const precioDescuentoTotal = producto.precio * (1 - porcentaje / 100);
      const descuentoIndividual = producto.precio - precioDescuentoTotal;

      producto.precio -= descuentoIndividual;
    });
  }
}

module.exports = CarritoCompra;