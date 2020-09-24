import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient: HttpClient) { }

  RegisterUser(data) {
    return this.httpclient.post(`${ environment.url}/api/user/register`,data)
  }


}
