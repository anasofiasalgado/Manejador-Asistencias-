import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';

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
        return this._http.get(this.baseUrl);
    }

    getCurso(id): Observable<any> {
        return this._http.get(`${this.baseUrl}/${id}`);
    }

    createCurso(data): Observable<any> {
        return this._http.post(this.baseUrl, data);
    }

    updateCurso(id, data): Observable<any> {
        return this._http.put(`${this.baseUrl}/${id}`, data);
    }

    deleteCurso(id): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${id}`);
    }

    deleteAllCursos(): Observable<any> {
        return this._http.delete(this.baseUrl);
    }

    findByNombre(nombre): Observable<any> {
        return this._http.get(`${this.baseUrl}?nombre=${nombre}`);
    }
}
