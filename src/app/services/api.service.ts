import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getplanOne(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file); // 'file' is the key expected by the backend
    return this.http.post(`${this.apiUrl}/upload/plan1`, formData);
  }

  getplanTwo(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file); // 'file' is the key expected by the backend
    return this.http.post(`${this.apiUrl}/upload/plan2`, formData);
  }

}
