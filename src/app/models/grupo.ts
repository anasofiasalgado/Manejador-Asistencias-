export class Grupo {

    _id: string;
    nombre: string;
    sesiones: {};

    constructor(_id='', nombre='', sesiones={}) {
        this._id = _id;
        this.nombre = nombre;
        this.sesiones = sesiones;
    }
}