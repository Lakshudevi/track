import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  constructor(private router: Router) {}

    onSubmit() {
    
    // Handle login logic here
    this.router.navigate(['/tracker']);
    
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}

