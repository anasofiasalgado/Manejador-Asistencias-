var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    correo: String,
    contraseña: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema);
