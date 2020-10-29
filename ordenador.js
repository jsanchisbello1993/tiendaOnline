class Ordenador extends Producto {
  constructor(referencia, marca, peso, precio,procesador, capacidad, ram, gráfica, so) {
  super(referencia, marca, peso, precio);
  this.procesador = procesador;
  this.capacidad = capacidad;
  this.ram = ram;
  this.gráfica = gráfica;
  this.so = so;
  }
}
