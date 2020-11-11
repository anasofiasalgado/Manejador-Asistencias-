import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-cursostable',
  templateUrl: './cursostable.component.html',
  styleUrls: ['./cursostable.component.scss']
})
export class CursostableComponent implements OnInit, OnDestroy {
  
  public cursos: Array<String>;
  dtOptions: DataTables.Settings = {};
  data: any;

  constructor() { 
    this.cursos = new Array();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  ngOnInit(): void {
    this.cursos.push("Agiles");
    this.cursos.push("Web");
    this.cursos.push("Prototipos");
    this.cursos.push("Vida saludable");
  }

  ngOnDestroy(): void {

  }

}
