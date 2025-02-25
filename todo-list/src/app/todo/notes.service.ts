import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  baseUrl = '';
  constructor(public httpClient: HttpClient) {}

  AddNote(title: string, content: string): Observable<any> {
    return this.httpClient.put(title, content);
  }
}
