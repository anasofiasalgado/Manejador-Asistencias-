import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';

const baseUrl = global.url;

@Injectable({
    providedIn: 'root'
})
export class GruposService {
    constructor(private _http: HttpClient) {}
    
    getAllGrupos(): Observable<any> {
        return this._http.get(baseUrl);
    }

    getGrupo(id): Observable<any> {
        return this._http.get(`${baseUrl}/${id}`);
    }

    createGrupo(data): Observable<any> {
        return this._http.post(baseUrl, data);
    }

    updateGrupo(id, data): Observable<any> {
        return this._http.put(`${baseUrl}/${id}`, data);
    }

    deleteGrupo(id): Observable<any> {
        return this._http.delete(`${baseUrl}/${id}`);
    }

    deleteAllGrupos(): Observable<any> {
        return this._http.delete(baseUrl);
    }

    findByNombre(nombre): Observable<any> {
        return this._http.get(`${baseUrl}?nombre=${nombre}`);
    }
}