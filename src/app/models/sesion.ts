var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sesionSchema = new Schema({
    nombreAlumno: String,    
    fecha: Date,
    asistencia: Boolean,
    unidadC: Number
});

module.exports = mongoose.model('Sesion', sesionSchema);