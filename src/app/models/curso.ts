export class Curso {

    _id: string;
    nombre: string;
    unidades: number;
    grupos: {};
    usuario: {};

    constructor(_id='', nombre='', unidades=5, 
        grupos={}, usuario={}) {
            
        this._id = _id;
        this.nombre = nombre;
        this.unidades = unidades;
        this.grupos = grupos;
        this.usuario = usuario;
    }
}