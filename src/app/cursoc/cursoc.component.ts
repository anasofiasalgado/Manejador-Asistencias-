import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-cursoc',
  templateUrl: './cursoc.component.html',
  styleUrls: ['./cursoc.component.scss'],
  providers: [CursosService]
})
export class CursocComponent implements OnInit {

  public title: string;
  public curso: Curso;

  constructor(
    private _cursosService: CursosService
  ) {
    this.title = "Registrar curso";
    this.curso = new Curso('', '', 0, new Array(), new Array());
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log();
  }

  registrarCurso = function () {
    
  };

}
