class Cargadores extends Producto {
  constructor(referencia, marca, peso, precio,voltaje,amperaje) {
  super(referencia, marca, peso, precio);
  this.voltaje = voltaje;
  this.amperaje = amperaje;
  }
}
