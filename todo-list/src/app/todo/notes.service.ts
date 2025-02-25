import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Note } from './todo-model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  baseUrl = '';
  constructor(public httpClient: HttpClient) {}

  getNote(userId: number): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`/api/users/${userId}`);
  }

  AddNote(title: string, content: string): Observable<any> {
    return this.httpClient.put(title, content);
  }
}
