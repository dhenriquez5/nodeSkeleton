var moment = require('moment');


const addNuevoCapital_Interes = (prestamo) => {
    let sum_pagos = 0;
    prestamo.pagos.map((p) => {
        sum_pagos += p.valor_capital;
    });

    const capital_actual = prestamo.valor_prestamo - sum_pagos;
    var date1 = moment(prestamo.fecha_prestamo);
    var date2 = moment();
    var daysDiff = date2.diff(date1, 'days');

    const valor_interes = capital_actual * (prestamo.tasa_interes/100) / 30 * daysDiff;

    prestamo.capital_actual=parseInt(capital_actual);
    prestamo.valor_interes=parseInt(valor_interes);
    return prestamo;
}

module.exports = {
    addNuevoCapital_Interes
}