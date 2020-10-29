class Smartphone extends Dispositivos_portables {
  constructor(referencia, marca, peso, precio,procesador, capacidad, ram, tamaño_pantalla, so, color,numero_camaras) {
    super(referencia, marca, peso, precio,procesador, capacidad, ram, tamaño_pantalla, so, color);
    this.numero_camaras = numero_camaras;
  }
}
