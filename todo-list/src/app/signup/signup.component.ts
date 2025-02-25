import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  Onsignup() {
    this.authService.signup(this.username, this.password).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/todo']);
      },
    });
  }

  OnsignIn() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/todo']);
      },
    });
  }
}
