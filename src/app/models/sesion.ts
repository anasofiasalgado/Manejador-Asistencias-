export class Sesion {

    _id: string;
    nombreAlumno: string;
    fecha: Date;
    asistencia: boolean;
    unidadC: number;

    constructor(_id='', nombreAlumno='', fecha= Date, asistencia=false,
        unidadC=0) {
        
        this._id = _id;
        this.nombreAlumno = nombreAlumno;
        this. fecha = new Date();
        this.unidadC = unidadC;
    }
}