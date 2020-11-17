import { Curso } from './curso';

export class Usuario {

    constructor(
        public _id: string, 
        public correo: string, 
        public contrasena: string,
        public cursos: Curso[] = []
    ) {}
}