import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data)
  {
    this.loginService.Login(data).subscribe((data) =>{
      localStorage.setItem('authToken', data.token);
      this.router.navigate(['transactions']);
    })
  }

  GoToRegister(){
    this.router.navigate(['register']);
  }

}
