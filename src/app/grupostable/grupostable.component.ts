import { Component, OnInit, OnDestroy } from '@angular/core';
import { GruposService } from '../services/grupo.service';
import { Subject } from 'rxjs';
import { Grupo } from '../models/grupo';


@Component({
  selector: 'app-grupostable',
  templateUrl: './grupostable.component.html',
  styleUrls: ['./grupostable.component.scss'],
  providers: [GruposService]
})
export class GrupostableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public grupos: Grupo[];

  constructor(
    private _gruposService: GruposService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.getGrupos(); 

  }

  getGrupos() {
    this._gruposService.getAllGrupos().subscribe(
      response => {
        if (response.grupos) {
          console.log(response);
          this.grupos = response.grupos;
        }

        this.dtTrigger.next();
      },
      err => {
        console.log(<any>err);
      }
    );
  }

}
