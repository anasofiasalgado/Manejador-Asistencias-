var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cursos = mongoose.model('Curso');

var grupoSchema = new Schema({
    nombre: String,    
    curso: {type: Schema.ObjectId, ref: "Curso"}
});

module.exports = mongoose.model('Grupo', grupoSchema);