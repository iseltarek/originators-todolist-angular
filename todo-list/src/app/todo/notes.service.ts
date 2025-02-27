import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Note } from './todo-model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  token = localStorage.getItem('token');
  baseUrl = 'http://localhost:3000';

  constructor(public httpClient: HttpClient, public authService: AuthService) {}

  getAllNotes(): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.token}`,
    });
    return this.httpClient.get<Note[]>(`${this.baseUrl}/todos/`, { headers });
  }

  getNoteById(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/todos/`);
  }

  DeleteNote(id: string): Observable<any> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.token}`,
    });
    return this.httpClient.delete(`${this.baseUrl}/todos/${id}`, { headers });
  }
  AddNote() {}

  // AddNote(title: string): Observable<any> {
  //   return false;
  // }
}
