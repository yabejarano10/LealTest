import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { TransactionsComponent } from './users/transactions/transactions.component';
const routes = [
    {
        path: "users",
        component: LoginComponent
    },
    {
        path: "transactions",
        component: TransactionsComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map