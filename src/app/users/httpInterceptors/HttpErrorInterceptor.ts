import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private toastrService: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error) => {
                    let errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;

                    switch(error.error.code){
                        case 130:{
                            this.toastrService.error(`(${error.error.code}) All fields are required`, `Error Code: ${error.status}`)
                            break;
                        }
                        case 101:{
                            this.toastrService.error(`(${error.error.code}) ${error.error.message}`, `Error Code: ${error.status}`)
                            break;
                        }
                        case 102:{
                            this.toastrService.error(`(${error.error.code}) ${error.error.message}`, `Error Code: ${error.status}`)
                            break;
                        }
                        case 120:{
                            this.toastrService.error(`(${error.error.code}) Error in token`, `Error Code: ${error.status}`)
                            break;
                        }
                        case 104:{
                            this.toastrService.error(`(${error.error.code}) The email is already registered`, `Error Code: ${error.status}`)
                            break;
                        }
                        default: { 
                            this.toastrService.error(`${error.message}`, `Error Code: ${error.status}`) 
                            break; 
                         } 

                    }
                    return throwError(errorMsg);
                })
            )
    }
}