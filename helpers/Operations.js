var moment = require('moment');


// const addNuevoCapital_Interes = (prestamo) => {
//     let sum_pagos = 0;
//     let fecha_corte = prestamo.fecha_prestamo;
//     prestamo.pagos.map((p) => {
//         sum_pagos += p.valor_capital;
//     });

//     if (prestamo.pagos.length > 0) {
//         let maxDateObject = prestamo.pagos.reduce((prev, curr) => {
//             let prevDate = new Date(prev.date);
//             let currDate = new Date(curr.date);
//             return (prevDate > currDate) ? prev : curr;
//         });
//         fecha_corte = maxDateObject.fecha_pago;
//     }

//     const capital_actual = prestamo.valor_prestamo - sum_pagos;
//     var date1 = moment(fecha_corte);
//     var date2 = moment();
//     var daysDiff = date2.diff(date1, 'days');
//     const valor_interes = capital_actual * (prestamo.tasa_interes / 100) / 30 * daysDiff;

//     prestamo.capital_actual = parseInt(capital_actual);
//     prestamo.valor_interes = parseInt(valor_interes);
//     return prestamo;

// }

const CalcularInteres = (prestamo,fecha_corte)=>{
    let sum_pagos = 0;
    let fecha_ultimo_pago = prestamo.fecha_prestamo;
    console.log(prestamo.pagos);
    prestamo.pagos.map((p) => {
        sum_pagos += p.valor_capital;
    });

    if (prestamo.pagos.length > 0) {
        let maxDateObject = prestamo.pagos.reduce((prev, curr) => {
            let prevDate = new Date(prev.date);
            let currDate = new Date(curr.date);
            return (prevDate > currDate) ? prev : curr;
        });
        fecha_ultimo_pago = maxDateObject.fecha_pago;
    }

    const capital_actual = prestamo.valor_prestamo - sum_pagos;
    var date1 = moment(fecha_ultimo_pago);// FECHA DE ULTIMO PAGO / FECHA DE PRESTAMO
    var date2 = moment(fecha_corte);//FECHA DIGITADA EN VISTA
    var daysDiff = date2.diff(date1, 'days');

    const valor_interes = capital_actual * (prestamo.tasa_interes / 100) / 30 * daysDiff;
    
    prestamo.capital_actual = parseInt(capital_actual);
    prestamo.valor_interes = parseInt(valor_interes);
    return prestamo;
}

module.exports = {
    //addNuevoCapital_Interes,
    CalcularInteres
}