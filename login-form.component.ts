import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'] // Correct property name
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
  constructor(private router: Router) {}

  
  login(): void {
    if (this.username === '' && this.password == '') {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard']);
    } 
    else {
      alert('Invalid username or password');
    }
  }
  forgotPassword() {
    // Implement forgot password logic here
    console.log('Forgot password clicked');
  }
  
  
}





