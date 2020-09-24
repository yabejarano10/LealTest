import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    intercept(request, next) {
        if (this.auth.isAuthenticated()) {
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('authToken')}`) });
        }
        else {
            this.router.navigate(['users']);
        }
        return next.handle(request);
    }
};
AuthInterceptor = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=AuthInterceptor.js.map