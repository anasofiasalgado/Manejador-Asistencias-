import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { Usuario } from '../models/usuario';
import { Grupo } from '../models/grupo';
import { CursosService } from '../services/curso.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cursoc',
  templateUrl: './cursoc.component.html',
  styleUrls: ['./cursoc.component.scss'],
  providers: [CursosService]
})
export class CursocComponent implements OnInit {

  public title: string;
  public curso: Curso;
  public status: string;

  constructor(
    private _cursosService: CursosService
  ) {
    this.curso = new Curso('', '', 5, [], '');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(this.curso);
    this._cursosService.createCurso(this.curso).subscribe(
      response => {
        if (response.curso) {
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
