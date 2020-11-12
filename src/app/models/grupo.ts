import { Sesion } from './sesion';

export class Grupo {

    constructor(
        public _id: string,
        public nombre: string,
        public sesiones: Sesion[]
    ) {}
}