let carrito = [];

// referencia, marca, procesador, capacidad, ram, gráfica, so, dvd_blueray, peso, precio voy a poner bien el SO. Ventanas en vez de windows jaja
let ordenador_hp = new Sobremesa(01, "HP","Intel i5","250GB","16GB", "ZXS", "Ventanas",true,5000 ,250);
let ordenador_samsung = new Sobremesa(02, "Samsung e5","AMD R5","250GB","8GB","Grafica", "Ventanas",true,4000 ,269);
let ordenador_asus = new Sobremesa(03, "Asus XC45","Intel i5","500GB","16GB","Grafica", "Ventanas",false,1000 ,349);
let ordenador_mac = new Sobremesa(04, "Apple Mac","Kirin 5","1TB","30GB","Grafica", "IOS",false,600 ,5000);
let ordenador_toshiba = new Sobremesa(05,"Toshiba","Resx 7","400GB","16GB","Grafica","IntelCore",true,5000,600);

let portatil_hp = new Portatiles(06, "HP","amd4", "500GB", "16GB", "ultraHD", "BIG", "15p",2000, 400);
let portatil_samsung = new Portatiles(07, "Samsung", "Ax34", "400GB", "36GB", "HiperR4", "Windows", "17p",2000 , 345);
let portatil_asus = new Portatiles(08, "Asus Jesús","ABD45", "700GB", "30GB", "Han-solo", "Linux", "14p", 2756 , 600);
let portatil_macbook = new Portatiles(09, "Manzana", "Verde56", "264GB", "42GB", "Arbolero67", "ELMAnzano","TamañoIdeal", 45,2345);

let m_iphone = new Smartphone(18, "APPLE",128,5000, "Qualcom", "32GB", "4GB", "4p", "IOS", "Negro", "1");
let m_nokia = new Smartphone(19, "Nokia",132, 269, "Snapdragon", "43GB", "4GB","5p", "Android", "Negro", "2");
let m_zapatofono = new Smartphone(20, "Zapatofono",2000, 149, "Kirin", "1MB", "4KB", "2p", "pera", "Negro", "0");
let m_pepino = new Smartphone(21, "PepinoPone", "85g", 89, "NoHay", "600kbytes", "--k", "1p","zapa", "Negro", "0");

let tablet_samsung = new Tablets(10, "Samsung",1000, 269, "Proc34", "128GB", "8GB", "8p", "Android","Blanco", "4G-WI-FI");
let tablet_xiaomi = new Tablets(11, "Xiaomi", 1145, 249, "Proc45", "64GB", "12GB", "9p", "Android", "Negro", "4G/WI-FI");
let tablet_ipad = new Tablets(12, "Apple",985, 479, "ProcXC", "128GB", "8GB", "10p", "IOS", "Dorado", "5G/WI-FI");

let a1 = new Pantallas(13, "PH", 1300,59, "17p");
let a2 = new Ratones(14, "Dell",90,19, "inalámbrico");
let a3 = new Cables(15, "Nidea", 38, 11, "Hdmi");
let a4 = new Teclados(16, "PINEAPPLE", 64, 56, 26);
let a5 = new Cargadores(17, "Samsung",35, 15, "240V", "2000 mAh");
//AÑADIR LOS PRODUCTOS AL CARRITO

document.getElementById('pc1').onclick = function(){
  carrito.push(ordenador_hp);

    document.getElementById('producto').innerHTML += "<li>"+"PC "+ordenador_hp.marca+"--->"+ordenador_hp.precio+"€"+"</li>";
  }
  console.log(carrito);

document.getElementById('pc2').onclick = function(){
  carrito.push(ordenador_samsung);

    document.getElementById('producto').innerHTML += "<li>"+"PC "+ordenador_samsung.marca+"--->"+ordenador_samsung.precio+"€"+"</li>";
  console.log(carrito);
}
document.getElementById('pc3').onclick = function(){
  carrito.push(ordenador_asus);

    document.getElementById('producto').innerHTML += "<li>"+"PC "+ordenador_asus.marca+"--->"+ordenador_asus.precio+"€"+"</li>";
  console.log(carrito);
}
document.getElementById('pc4').onclick = function(){
  carrito.push(ordenador_mac);

    document.getElementById('producto').innerHTML += "<li>"+"PC "+ordenador_mac.marca+"--->"+ordenador_mac.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('pc5').onclick = function(){
  carrito.push(ordenador_toshiba);

    document.getElementById('producto').innerHTML += "<li>"+"PC "+carrito[i].marca+"    "+carrito[i].precio+"</li>";

  console.log(carrito);
}

//PORTATILES Añadir a la cesta
document.getElementById('p1').onclick = function(){
  carrito.push(portatil_hp);

    document.getElementById('producto').innerHTML += "<li>"+"Portatil "+portatil_hp.marca+"--->"+portatil_hp.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('p2').onclick = function(){
  carrito.push(portatil_samsung);

    document.getElementById('producto').innerHTML += "<li>"+"Portatil "+portatil_samsung.marca+"--->"+portatil_samsung.precio+"€"+"</li>";
  console.log(carrito);
}
document.getElementById('p3').onclick = function(){
  carrito.push(portatil_asus);

    document.getElementById('producto').innerHTML += "<li>"+"Portatil "+portatil_asus.marca+"--->"+portatil_asus.precio+"€"+"</li>";
  console.log(carrito);
}
document.getElementById('p4').onclick = function(){
  carrito.push(portatil_macbook);

    document.getElementById('producto').innerHTML += "<li>"+"Portatil "+portatil_macbook.marca+"--->"+portatil_macbook.precio+"€"+"</li>";

  console.log(carrito);
}

//Smartphone Añadir a la cesta
document.getElementById('m1').onclick = function(){
  carrito.push(m_iphone);

    document.getElementById('producto').innerHTML += "<li>"+"Smartphone "+m_iphone.marca+"--->"+m_iphone.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('m2').onclick = function(){
  carrito.push(m_nokia);
    document.getElementById('producto').innerHTML += "<li>"+"Smartphone "+m_nokia.marca+"--->"+m_nokia.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('m3').onclick = function(){
  carrito.push(m_zapatofono);
    document.getElementById('producto').innerHTML += "<li>"+"Smartphone "+m_zapatofono.marca+"--->"+m_zapatofono.precio+"</li>";

  console.log(carrito);
}
document.getElementById('m4').onclick = function(){
  carrito.push(m_iphone);
    document.getElementById('producto').innerHTML += "<li>"+"Smartphone "+m_iphone.marca+"--->"+m_zapatofono.precio+"€"+"</li>";
  console.log(carrito);
}
//Tablets Añadir a la cesta
document.getElementById('t1').onclick = function(){
  carrito.push(tablet_samsung);

  document.getElementById('producto').innerHTML += "<li>"+"Tablet "+tablet_samsung.marca+"--->"+tablet_samsung.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('t2').onclick = function(){
  carrito.push(tablet_xiaomi);

    document.getElementById('producto').innerHTML += "<li>"+"Tablet "+tablet_xiaomi.marca+"--->"+tablet_xiaomi.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('t3').onclick = function(){
  carrito.push(tablet_ipad);

    document.getElementById('producto').innerHTML += "<li>"+"Tablet "+tablet_ipad.marca+"--->"+tablet_ipad.precio+"€"+"</li>";
  console.log(carrito);
}
//Añadir a la cesta Accersorios
document.getElementById('a1').onclick = function(){
  carrito.push(a1);

    document.getElementById('producto').innerHTML += "<li>"+"Pantalla "+a1.marca+"--->"+a1.precio+"€"+"</li>";

  console.log(carrito);
}

document.getElementById('a2').onclick = function(){
  carrito.push(a2);

    document.getElementById('producto').innerHTML += "<li>"+"Ratón PC "+a2.marca+"--->"+a2.precio+"</li>";

  console.log(carrito);
}
document.getElementById('a3').onclick = function(){
  carrito.push(a3);

    document.getElementById('producto').innerHTML += "<li>"+"Cable "+a3.tipo+"--->"+a3.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('a4').onclick = function(){
  carrito.push(a4);

    document.getElementById('producto').innerHTML += "<li>"+"Teclado "+a4.marca+"--->"+a4.precio+"€"+"</li>";

  console.log(carrito);
}
document.getElementById('a5').onclick = function(){
  carrito.push(a5);

    document.getElementById('producto').innerHTML += "<li>"+"Cargador "+a5.marca+"--->"+a5.precio+"€"+"</li>";

  console.log(carrito);
}


//CALCULAR PRECIO TOTAL DEL PEDIDO


document.getElementById('total-pedido').onclick = function(){
  let numero=0;
  let suma=0;
  let con_iva=0;
  let total_iva=0;
  const iva =0.18;
  for (var i = 0; i < carrito.length; i++) {
    numero = carrito[i].precio;
    suma +=numero;
    total_iva =suma*iva
    con_iva=suma+total_iva;
  }
  console.log("El pedido tiene un total de: "+suma+"€"+" IVA no incluido");
  console.log("El pedido tiene un total de: "+con_iva+"€"+" IVA incluido");
  let suma_peso =0;
  let num =0;
  for (var i = 0; i < carrito.length; i++) {
  num = carrito[i].peso;
  suma_peso +=num;
  }
  console.log("Peso total del pedido: "+suma_peso+" gramos")
}
document.getElementById('gastos-envio').onclick = function(){
  let numero =0;
  let gastoEnvio =0;
  let suma_peso =0;
  let suma =0;
  let con_iva=0;
  let total_iva=0;
  const iva =0.18;

  for (var i = 0; i < carrito.length; i++) {
    numero = carrito[i].precio;
    suma +=numero;
    total_iva =suma*iva
    con_iva=suma+total_iva;
}
for (var i = 0; i < carrito.length; i++) {
num = carrito[i].peso;
suma_peso +=num;
}
if(suma >99){
  // pedido.innerHTML = "Gastos de envio gratis, ya que supera los 99 euros en su compra"
  console.log("Gastos de envio gratis, ya que supera los 99 euros en su compra");

  }else if(suma_peso >8000) {
    gastoEnvio =9;
    console.log("Su pedido es superior a 8kg y el coste de envio es de: "+gastoEnvio+"€");
  }else{
    gastoEnvio=6;
    console.log("Su pedido es inferior a 8kg y el coste de envio es de: "+gastoEnvio+"€");
  }
}

document.getElementById("num-pedido").onclick = function(){
  let numpedido = Math.floor(Math.random()*(0,100));
  console.log("ES-"+numpedido+"-PApple");

}
// function vaciarCarro()
