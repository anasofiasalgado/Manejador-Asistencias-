export class Usuario {

    _id: string;
    correo: string;
    contrasena: string;

    constructor(_id='', correo='', contrasena='') {
        this._id = _id;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}
