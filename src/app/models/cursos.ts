var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuario');
<<<<<<< HEAD
=======
var Grupo = mongoose.model('Grupo');
>>>>>>> master

var cursoSchema = new Schema({
    nombre: String,
    unidades: Number,
<<<<<<< HEAD
    usuario: {type: Schema.ObjectId, ref: "Usuario"}
=======
    usuario: {type: Schema.ObjectId, ref: "Usuario"},
    grupo: {type: Schema.ObjectId, ref: "Grupo"}
>>>>>>> master
});

module.exports = mongoose.model("Curso", cursoSchema);