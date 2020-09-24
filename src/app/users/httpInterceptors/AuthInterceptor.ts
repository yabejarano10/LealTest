import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(public auth: LoginService, public router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (this.auth.isAuthenticated()) {
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('authToken')}`) });
        }
        else {
            this.router.navigate(['users']);
        }
        return next.handle(request);
    }
}