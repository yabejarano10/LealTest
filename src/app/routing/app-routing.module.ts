import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../users/login/login.component';
import {TransactionsComponent} from '../users/transactions/transactions.component';
import {RegisterComponent} from '../users/register/register.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"users",
    component:LoginComponent
  },
  {
    path:"transactions",
    component:TransactionsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
