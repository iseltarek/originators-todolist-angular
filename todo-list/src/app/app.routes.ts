import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', redirectTo: '/signup' },
];
