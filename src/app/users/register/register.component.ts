import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../Models/user';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,
              public datepipe: DatePipe,
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data)
  {
    var formatedBirthday = `${data.birthday.year}-${data.birthday.month}-${data.birthday.day}`
    var date = new Date(formatedBirthday)
    let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');

    var newUser: User = data
    newUser.birthday = latest_date

    this.registerService.RegisterUser(newUser).subscribe((data) => {
      this.router.navigate(['users']);
    })
  }

}
