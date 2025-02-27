import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  constructor(public authService: AuthService, public router: Router) {}

  OnsignIn() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/todo']);
      },
      error: (err) => {
        console.log(err.message);
        this.errorMessage = err.error.message;
      },
    });
  }

  Onsignup() {
    this.router.navigate(['/signup']);
  }
}
