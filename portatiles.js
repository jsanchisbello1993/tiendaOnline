class Portatiles extends Ordenador {
  constructor(referencia, marca, procesador, capacidad, ram, gráfica, so, tamaño_pantalla, peso , precio) {
  super(referencia, marca, peso, precio,procesador, capacidad, ram, gráfica, so);
    this.tamaño_pantalla = tamaño_pantalla;

  }
}
