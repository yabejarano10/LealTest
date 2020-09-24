import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let LoginService = class LoginService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    Login(data) {
        return this.httpclient.post(`${environment.url}/api/user/login`, data);
    }
    isAuthenticated() {
        var token = localStorage.getItem('authToken');
        return (token != null);
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map