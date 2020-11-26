import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Curso } from '../models/curso';
import { Grupo } from '../models/grupo';
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-gruposg',
  templateUrl: './gruposg.component.html',
  styleUrls: ['./gruposg.component.scss'],
})
export class GruposgComponent implements OnInit {

  public status: string;
  public cursos: Curso[];
  public curso: Curso;
  public grupo: Grupo;

  constructor(
    private _cursosService: CursosService
  ) {
    this.curso = new Curso('',0,'',[]);
    this.grupo = new Grupo('');
  }

  ngOnInit(): void {
    this.getCursos();
  }

  /*
  * Obtiene todos los cursos registrados
  */
  getCursos() {
    this._cursosService.getAllCursos().subscribe(
      response => {
        if (response.cursos) {
          this.cursos = response.cursos;
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }
  
  onSubmit(form) {

  }

}
