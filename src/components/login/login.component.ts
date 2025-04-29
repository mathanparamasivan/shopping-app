import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule], 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    window.alert('Form submitted');
   // console.log('Form valid:', form.valid);
    //console.log('Form data:', form.value);

    //if (form.valid) {
    //   if (this.authService.login(this.username, this.password)) {
    //     this.router.navigate(['/products']);
    //   } else {
    //     this.loginFailed = true;
    //   }
    // }
  }
}
