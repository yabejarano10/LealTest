import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/internal/operators/delay';
let TransactionsService = class TransactionsService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    GetTransactions(startDate = "", endDate = "") {
        return this.httpclient.get(`${environment.url}/api/user/my/transactions?startDate=${startDate}&endDate=${endDate}`).pipe(delay(500));
    }
};
TransactionsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TransactionsService);
export { TransactionsService };
//# sourceMappingURL=transactions.service.js.map