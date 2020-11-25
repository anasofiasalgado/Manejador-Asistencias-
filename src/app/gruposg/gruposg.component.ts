import { Component, OnInit } from '@angular/core';
//import { Grupo } from '../models/grupo';
//import { GruposService } from '../services/grupo.service';
import { HttpHeaders } from '@angular/common/http';
import { Curso } from '../models/curso';
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-gruposg',
  templateUrl: './gruposg.component.html',
  styleUrls: ['./gruposg.component.scss'],
  //providers: [GruposService]
})
export class GruposgComponent implements OnInit {

  public title: string;
 // public grupo: Grupo;
  public status: string;
  public cursos: Curso[];
 // public grupos: Grupo[];

  constructor(
   // private _grupoService: GruposService,
    private _cursosService: CursosService
  ) {
 //   this.grupo = new Grupo('', '', '', []);
  }

  ngOnInit(): void {
    this.getCursos();
    //this.getGrupos();
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
   // console.log(this.grupo);

   

}
}
