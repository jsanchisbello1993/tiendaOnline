class Sobremesa extends Ordenador {
  constructor(referencia, marca, procesador, capacidad, ram, gráfica, so, dvd_blueray, peso, precio) {
    super(referencia, marca, peso, precio,procesador, capacidad, ram, gráfica, so);
    this.dvd_blueray = dvd_blueray;
// Dentro de super tienes que poner los parametros que pasas al constructor del padre
//Todos sus parametros
//no lo había hecho?
//Aqui por ejemplo te faltaban algunso como referencia o marca no estaban puestos en super
//es verdad, ademas recuerdo que me lo dijiste tu...
//Puede ser jajajajajajaaj
//seguro, pero quizas no lo retoqué en todos.
//Haz una cosa, todos los parametros que hay en el coonstructor de producto copai y pegalos a sus hijos
//Y lo mismo con los hijos a sus hijos
//Aragorn hijo de Arazorn
// y repuebla toda la tierra
  }
}
