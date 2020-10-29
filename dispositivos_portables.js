class Dispositivos_portables extends Producto {
  constructor(referencia, marca, peso, precio,procesador, capacidad, ram, tamaño_pantalla, so, color) {
  super(referencia, marca, peso, precio);
    this.procesador = procesador;
    this.capacidad = capacidad;
    this.ram = ram;
    this.tamaño_pantalla = tamaño_pantalla;
    this.so = so;
    this.color = color;
  }
}
