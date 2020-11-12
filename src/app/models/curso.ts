import { Grupo } from './grupo';
import { Usuario } from './usuario';

export class Curso {
    constructor(
        public _id: string,
        public nombre: string,
        public unidades: number,
        public grupos: Grupo[],
        public usuario: Usuario[]
    ) {}
}