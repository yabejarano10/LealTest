import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './HttpErrorInterceptor';
import { AuthInterceptor } from './AuthInterceptor';
export const interceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
//# sourceMappingURL=Interceptors.js.map