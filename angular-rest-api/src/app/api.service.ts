import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';  // Example API

  constructor(private http: HttpClient) { }

  // GET Request Example
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  // POST Request Example
  createPost(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, data);
  }

  // PUT Request Example
  updatePost(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/posts/${id}`, data);
  }

  // DELETE Request Example
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`);
  }
}
