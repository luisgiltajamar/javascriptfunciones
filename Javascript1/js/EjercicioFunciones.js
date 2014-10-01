var suma = function(datos) {
    var suma = 0;
    for (var i = 0; i < datos.length; i++) {
        suma += parseInt(datos[i]);

    }

    return suma;
};


var media = function(datos) {
    var total = suma(datos);

    this.ma = total / datos.length;

};

var ver = function(obj) {
    alert(obj.ma);

};

(function() {
    var datos = [];
    while (true) {
        var n = prompt("Dime un nmero");
        if(isNaN(n))
            break;

        datos.push(n);
    }
    var obj = {};
    alert(suma(datos));
    media.call(obj,datos);
    ver(obj);

})();