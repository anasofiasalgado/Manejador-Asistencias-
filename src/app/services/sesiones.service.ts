import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { global } from './global';

const baseUrl = global.url;

@Injectable({
    providedIn: 'root'
})
export class SesionesService {

    constructor(private _http: HttpClient) {}
    
    getAllSesiones(): Observable<any> {
        return this._http.get(baseUrl);
    }

    getSesion(id): Observable<any> {
        return this._http.get(`${baseUrl}/${id}`);
    }

    createSesion(data): Observable<any> {
        return this._http.post(baseUrl, data);
    }

    updateSesion(id, data): Observable<any> {
        return this._http.put(`${baseUrl}/${id}`, data);
    }

    deleteSesion(id): Observable<any> {
        return this._http.delete(`${baseUrl}/${id}`);
    }

    deleteAllSesiones(): Observable<any> {
        return this._http.delete(baseUrl);
    }
}