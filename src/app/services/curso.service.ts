import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';

const baseUrl = global.url;

@Injectable({
    providedIn: 'root'
})
export class CursosService {
    constructor(private _http: HttpClient) {}

    getAllCursos(): Observable<any> {
        return this._http.get(baseUrl);
    }

    getCurso(id): Observable<any> {
        return this._http.get(`${baseUrl}/${id}`);
    }

    createCurso(data): Observable<any> {
        return this._http.post(baseUrl, data);
    }

    updateCurso(id, data): Observable<any> {
        return this._http.put(`${baseUrl}/${id}`, data);
    }

    deleteCurso(id): Observable<any> {
        return this._http.delete(`${baseUrl}/${id}`);
    }

    deleteAllCursos(): Observable<any> {
        return this._http.delete(baseUrl);
    }

    findByNombre(nombre): Observable<any> {
        return this._http.get(`${baseUrl}?nombre=${nombre}`);
    }
}
