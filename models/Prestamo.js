const { Schema, model } = require('mongoose');


const PrestamoSchema = Schema({
    id_cliente:{type:Schema.Types.ObjectId, ref:'Cliente',required:true},
    cliente:{type:String,required:true},
    fecha_prestamo:{type:Date, required:true},
    valor_prestamo:{type:Number,required:true},
    tasa_interes:{type:Number, required:true},
    periodo_pago:{type:String,required:true},
    observacion:{type:String},
    user:{ type: Schema.Types.ObjectId, ref:'Usuario',required:true},
    pagos: [{ valor_pago: Number, fecha_pago: Date, valor_capital:Number,valor_interes: Number}],
    capital_actual:Number,
    valor_interes:Number,
    pagado:{type:Boolean,default:false}
})

module.exports = model('Prestamo',PrestamoSchema);