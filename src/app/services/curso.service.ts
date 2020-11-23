import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { global } from './global';
import { Curso } from '../models/curso';


@Injectable({
    providedIn: 'root'
})
export class CursosService {
    public baseUrl: string;

    constructor(
        private _http: HttpClient
    ) {
        this.baseUrl = global.url;
    }

    getAllCursos(): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.baseUrl + '/cursos', {headers: headers});
    }

    getCurso(nombre): Observable<any> {
        return this._http.get(`${this.baseUrl}/${nombre}`);
    }

    createCurso(curso: Curso): Observable<any> {
        var params = JSON.stringify(curso);
        var headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.baseUrl + '/cursos', params, {headers: headers});
    }

    updateCurso(nombre, data): Observable<any> {
        return this._http.put(`${this.baseUrl}/${nombre}`, data);
    }

    deleteCurso(nombre): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${nombre}`, { responseType: 'text' });

      //  return this._http.delete(`${this.baseUrl}/${nombre}`);
    }

    deleteAllCursos(): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.delete(this.baseUrl + '/cursos', {headers: headers});
    }

    findByNombre(nombre): Observable<any> {
        return this._http.get(`${this.baseUrl}?nombre=${nombre}`);
    }
}
