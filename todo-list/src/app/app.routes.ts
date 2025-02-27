import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', redirectTo: '/signup' },
];
