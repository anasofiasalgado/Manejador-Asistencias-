import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  registrarCurso = function () {
    this.router.navigateByUrl('/cursoc');
  };


 

}
