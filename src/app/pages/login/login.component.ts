import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObject: any= {
    email:'',
    password:''
  }
  router = inject(Router)

  onLogin()
  {
    if(this.loginObject.email == 'admin@gmail.com' &&  this.loginObject.password == '1234')
      {
        this.router.navigateByUrl('/client')
        localStorage.setItem('empErUser', this.loginObject.email);      
      }
      else
      {
      alert("Worng Credential");
      }
  }

}
