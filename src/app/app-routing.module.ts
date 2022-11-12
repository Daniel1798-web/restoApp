import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogginComponent} from './view/loggin/loggin.component'

import {HomeComponent} from './view/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Loggin', component: LogginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
