import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';
import { Grupo } from '../models/grupo';


@Injectable({
    providedIn: 'root'
})
export class GruposService {
    public baseUrl: string;

    constructor(
        private _http: HttpClient
    ) {
        this.baseUrl = global.url;
    }
    
    getAllGrupos(): Observable<any> {
        var headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.get(this.baseUrl + '/grupos', {headers: headers});
    }

    getGrupo(id): Observable<any> {
        return this._http.get(`${this.baseUrl}/${id}`);
    }

    createGrupo(grupo: Grupo): Observable<any> {
        var params = JSON.stringify(grupo);
        var headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.baseUrl + '/grupos', params, {headers: headers});    
    }

    updateGrupo(id, data): Observable<any> {
        return this._http.put(`${this.baseUrl}/${id}`, data);
    }

    deleteGrupo(id): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${id}`);
    }

    deleteAllGrupos(): Observable<any> {
        return this._http.delete(this.baseUrl);
    }

    findByNombre(nombre): Observable<any> {
        return this._http.get(`${this.baseUrl}?nombre=${nombre}`);
    }
}