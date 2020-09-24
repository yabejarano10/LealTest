import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './httpInterceptors/Interceptors';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    NgModule({
        declarations: [RegisterComponent, LoginComponent, TransactionsComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            NgbModule,
            NoopAnimationsModule,
            ToastrModule.forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-full-width',
                preventDuplicates: true,
            })
        ],
        providers: [interceptorProviders]
    })
], UsersModule);
export { UsersModule };
//# sourceMappingURL=users.module.js.map