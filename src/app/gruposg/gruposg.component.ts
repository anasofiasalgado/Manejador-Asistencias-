import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Grupo } from '../models/grupo';
import { GruposService } from '../services/grupo.service';
import { HttpHeaders } from '@angular/common/http';

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


  constructor(
    private grupServ: GruposService
  ) { 
    this.grupo= new Grupo('','',null,[]); 
  }

  ngOnInit(): void {
  }


  onSubmit(form) {
    console.log(this.grupo);
    this.grupServ.createGrupo(this.grupo).subscribe(
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
