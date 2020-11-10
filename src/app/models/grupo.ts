var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< HEAD
var Cursos = mongoose.model('Curso');

var grupoSchema = new Schema({
    nombre: String,    
    curso: {type: Schema.ObjectId, ref: "Curso"}
=======
var Sesion = mongoose.model('Sesion');

var grupoSchema = new Schema({
    nombre: String,
    sesion: {type: Schema.ObjectId, ref: "Sesion"}
>>>>>>> master
});

module.exports = mongoose.model('Grupo', grupoSchema);