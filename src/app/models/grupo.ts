import { Sesion } from './sesion';
import { Curso } from './curso';

export class Grupo {

    constructor(
        public _id: string,
        public nombre: string,
        public curso: string,
        public sesiones: Sesion[]
    ) {}
}