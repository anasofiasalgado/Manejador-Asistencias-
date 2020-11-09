var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Grupo = mongoose.model('Grupo');

var sesionSchema = new Schema({
    nombreAlumno: String,    
    fecha: Date,
    asistencia: Boolean,
    unidadC: Number,
    grupo: {type: Schema.ObjectId, ref: "Grupo"}
});

module.exports = mongoose.model('Sesion', sesionSchema);