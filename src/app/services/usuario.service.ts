import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';

const baseUrl = global.url;

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    constructor(private _http: HttpClient) {}
    
    getAllUsuarios(): Observable<any> {
        return this._http.get(baseUrl);
    }

    getUsuario(id): Observable<any> {
        return this._http.get(`${baseUrl}/${id}`);
    }

    createUsuario(data): Observable<any> {
        return this._http.post(baseUrl, data);
    }

    updateUsuario(id, data): Observable<any> {
        return this._http.put(`${baseUrl}/${id}`, data);
    }

    deleteUsuario(id): Observable<any> {
        return this._http.delete(`${baseUrl}/${id}`);
    }

    deleteAllUsuarios(): Observable<any> {
        return this._http.delete(baseUrl);
    }
}