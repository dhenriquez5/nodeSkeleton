var moment = require('moment');
const CalcularInteres = (prestamo, fecha_corte) => {
    let sum_pagos = 0;
    let fecha_ultimo_pago = prestamo.fecha_prestamo;
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

const getCobros = (prestamo, fecha_ini, fecha_fin) => {
    let fecha_ultimo_pago = prestamo.fecha_prestamo;
    if (prestamo.pagos.length > 0) {
        let maxDateObject = prestamo.pagos.reduce((prev, curr) => {
            let prevDate = new Date(prev.date);
            let currDate = new Date(curr.date);
            return (prevDate > currDate) ? prev : curr;
        });
        fecha_ultimo_pago = maxDateObject.fecha_pago;
    }
    const date1 = moment(fecha_ultimo_pago);
    const datePlusMonth = date1.add(1, 'months');
    const isValid = datePlusMonth.isBetween(moment(fecha_ini), moment(fecha_fin), undefined, '[]');
    return isValid === true;
}

const getFechaMayorPagos = (prestamo) => {
    let fecha_ultimo_pago = prestamo.fecha_prestamo;
    if (prestamo.pagos.length > 0) {
        let maxDateObject = prestamo.pagos.reduce((prev, curr) => {
            let prevDate = new Date(prev.date);
            let currDate = new Date(curr.date);
            return (prevDate > currDate) ? prev : curr;
        });
        fecha_ultimo_pago = maxDateObject.fecha_pago;
    }
    return fecha_ultimo_pago;
};

const ConvertPrestamoToPagos = (prestamo, fecha_ini, fecha_fin) => {
    const pagos = [];
    let pagosFiltered = prestamo.pagos.filter(p => moment(p.fecha_pago).isBetween(moment(fecha_ini), moment(fecha_fin), undefined, '[]'));

    pagosFiltered.forEach(pago => {
        pagos.push({
            _id:pago._id,
            cliente: prestamo.cliente,
            fecha_prestamo: prestamo.fecha_prestamo,
            valor_prestamo: prestamo.valor_prestamo,
            capital_actual: prestamo.capital_actual,
            fecha_pago:pago.fecha_pago,
            valor_pago:pago.valor_pago,
            valor_capital:pago.valor_capital,
            valor_interes:pago.valor_interes
        })
    });

    return pagos
}


module.exports = {
    CalcularInteres,
    getCobros,
    getFechaMayorPagos,
    ConvertPrestamoToPagos
}