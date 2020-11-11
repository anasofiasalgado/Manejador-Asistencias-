var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuario');
var Grupo = mongoose.model('Grupo');

var cursoSchema = new Schema({
    nombre: String,
    unidades: Number,
    usuario: {type: Schema.ObjectId, ref: "Usuario"},
    grupo: {type: Schema.ObjectId, ref: "Grupo"}
});

module.exports = mongoose.model("Curso", cursoSchema);