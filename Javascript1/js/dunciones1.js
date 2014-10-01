function hola(msg) {
    alert(msg);

}

var hola2= function(msg) {
    alert(msg);

}


hola("Hola");

hola2("Hola");

//hola2 = "Hola don pepito";
var hola3 = hola;

var hola= function(msg) {
    alert(msg + " Modificado");

}
hola3("Hola");

var pasar = function(objeto) {

    //  alert(objeto);

    return objeto.toUpperCase();
};

var recibir = function(pasado) {

   return  pasado("Estoy llamando a una funcion desde otra");

};


recibir(pasar);

