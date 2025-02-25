import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'node:console';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  baseUrl = '';

  constructor(public httpClient: HttpClient, public router: Router) {}

  signup(username: string, password: string): Observable<any> {
    this.isAuthenticatedSubject.next(true);
    this.router.navigate(['/todo']);
    return of({ success: true });
  }
  login(username: string, password: string): Observable<any> {
    this.isAuthenticatedSubject.next(true);
    this.router.navigate(['/todo']);
    return of({ success: true });
  }
  logout(): void {
    //this.router.navigate(['/signup']);
  }
}
