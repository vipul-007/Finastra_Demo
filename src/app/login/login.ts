import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  serverError: string | null = null;
  private router = inject(Router);

  onSubmit(form: any): void {
    if (form.valid) {
      // Simulate a login check
      if (this.username === 'admin' && this.password === 'password') {
        console.log('Login successful');
        this.router.navigate(['/dashboard']);
        this.serverError = null;
      } else {
        this.serverError = 'Invalid username or password.';
      }
    }
  }

}
