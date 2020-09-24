import { __decorate } from "tslib";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(catchError((error) => {
            let errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            switch (error.error.code) {
                case 130: {
                    this.toastrService.error(`(${error.error.code}) All fields are required`, `Error Code: ${error.status}`);
                    break;
                }
                case 101: {
                    this.toastrService.error(`(${error.error.code}) ${error.error.message}`, `Error Code: ${error.status}`);
                    break;
                }
                case 102: {
                    this.toastrService.error(`(${error.error.code}) ${error.error.message}`, `Error Code: ${error.status}`);
                    break;
                }
                case 120: {
                    this.toastrService.error(`(${error.error.code}) Error in token`, `Error Code: ${error.status}`);
                    break;
                }
                default: {
                    this.toastrService.error(`${error.message}`, `Error Code: ${error.status}`);
                    break;
                }
            }
            return throwError(errorMsg);
        }));
    }
};
HttpErrorInterceptor = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpErrorInterceptor);
export { HttpErrorInterceptor };
//# sourceMappingURL=HttpErrorInterceptor.js.map