import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  Login(data):Observable<any>
  {
    return this.httpclient.post(`${environment.url}/api/user/login`,data)
  }

  isAuthenticated():boolean
  {
    var token:string = localStorage.getItem('authToken')
    return (token !=null)
  }


}
