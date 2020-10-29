class Tablets extends Dispositivos_portables {
  constructor(referencia, marca, peso, precio,procesador, capacidad, ram, tamaño_pantalla, so, color, tipos_conexiones) {
    super(referencia, marca, peso, precio,procesador, capacidad, ram, tamaño_pantalla, so, color);
    this.tipos_conexiones = tipos_conexiones;
  }
}
