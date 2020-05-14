import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailComponent} from './email/email.component';


const routes: Routes = [
  { path: '', redirectTo: '/emailClient', pathMatch: 'full' },
  { path: 'emailClient', component: EmailComponent }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
