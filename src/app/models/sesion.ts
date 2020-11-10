var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< HEAD
var Grupo = mongoose.model('Grupo');
=======
>>>>>>> master

var sesionSchema = new Schema({
    nombreAlumno: String,    
    fecha: Date,
    asistencia: Boolean,
<<<<<<< HEAD
    unidadC: Number,
    grupo: {type: Schema.ObjectId, ref: "Grupo"}
=======
    unidadC: Number
>>>>>>> master
});

module.exports = mongoose.model('Sesion', sesionSchema);