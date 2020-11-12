export class Sesion {

    constructor(
        public _id: string,
        public nombreAlumno: string,
        public fecha: Date,
        public asistencia: boolean,
        public unidadC: number
    ) {}
}