import { Component, OnInit } from '@angular/core';
import { Grupo } from '../models/grupo';
import { GruposService } from '../services/grupo.service';
import { HttpHeaders } from '@angular/common/http';
import { Curso } from '../models/curso';
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-gruposg',
  templateUrl: './gruposg.component.html',
  styleUrls: ['./gruposg.component.scss'],
  providers: [GruposService]
})
export class GruposgComponent implements OnInit {

  public title: string;
  public grupo: Grupo;
  public status: string;
  public cursos: Curso[];
  public grupos: Grupo[];

  constructor(
    private _grupoService: GruposService,
    private _cursosService: CursosService
  ) {
    this.grupo = new Grupo('', '', '', []);
  }

  ngOnInit(): void {
    this.getCursos();
    this.getGrupos();
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

  /*
  * Obtiene todos los grupos registrados
  */
  getGrupos() {
    this._grupoService.getAllGrupos().subscribe(
      response => {
        if (response.grupos) {
          this.grupos = response.grupos;
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  onSubmit(form) {
    console.log(this.grupo);

    /* 
    * status - Representa el valor de la peticion.
    * status = 'existing' despliega un mensaje informando 
    * que el grupo registrado ya existe.
    * 
    * status = 'success' despliega un mensaje indicando que
    * se registro correctamente el grupo.
    * 
    * status = 'failed' despliega un mensaje indicando que
    * no se pudo crear el grupo.
    */
    // Se recorre la lista de los grupos
    this.grupos.forEach(grupito => {
      // Se valida que el grupo ingresado no exista en el MISMO CURSO
      if (grupito.nombre == this.grupo.nombre && grupito.curso == this.grupo.curso) {
        this.status = "existing";
      }
      // En caso de que no no haya coincidencia, se registra el grupo
      else {
        this.status = "success";
      }
    });

    if (this.status == "success") {
      // SUBSCRIPCION AL METODO DEL SERVICIO, QUE ACCEDE AL METODO LA API 
      // DEL SERVIDOR EL CUAL REGISTRA UN GRUPO
      this._grupoService.createGrupo(this.grupo).subscribe(
        response => {
          if (response.grupo) {
            this.status = "success";
          } else {
            this.status = "failed";
          }
          console.log(response);
          form.reset();
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

}
