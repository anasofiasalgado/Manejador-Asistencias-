import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from '../services/curso.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cursostable',
  templateUrl: './cursostable.component.html',
  styleUrls: ['./cursostable.component.scss'],
  providers: [CursosService]
})
export class CursostableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  persons: String[] = [];

  constructor(
    private cursosService: CursosService
    ) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3
    };

    this._http.get('')
      .subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
