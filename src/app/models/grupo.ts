var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Sesion = mongoose.model('Sesion');

var grupoSchema = new Schema({
    nombre: String,
    sesion: {type: Schema.ObjectId, ref: "Sesion"}
});

module.exports = mongoose.model('Grupo', grupoSchema);