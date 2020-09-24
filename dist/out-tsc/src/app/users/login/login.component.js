import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
    }
    onSubmit(data) {
        this.loginService.Login(data).subscribe((data) => {
            localStorage.setItem('authToken', data.token);
            this.router.navigate(['transactions']);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map