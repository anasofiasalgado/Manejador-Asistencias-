var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuario');

var cursoSchema = new Schema({
    nombre: String,
    unidades: Number,
    usuario: {type: Schema.ObjectId, ref: "Usuario"}
});

module.exports = mongoose.model("Curso", cursoSchema);