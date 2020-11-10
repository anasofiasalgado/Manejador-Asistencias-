var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    correo: String,
    contraseña: Number
});

<<<<<<< HEAD
module.exports = mongoose.model('Usuario', usuarioSchema);
//fdpoff
=======
module.exports = mongoose.model('Usuario', usuarioSchema);
>>>>>>> master
