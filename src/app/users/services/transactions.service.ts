import { Injectable } from '@angular/core';

import { HttpClient}from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpclient:HttpClient) { }

  GetTransactions(startDate:string ="",endDate:string=""):Observable<any>
  {
    return this.httpclient.get(`${environment.url}/api/user/my/transactions?startDate=${startDate}&endDate=${endDate}`).pipe(delay(500))
  }
}
