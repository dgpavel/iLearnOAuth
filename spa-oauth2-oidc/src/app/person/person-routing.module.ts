import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonHomeComponent } from './person-home/person-home.component';

const routes: Routes = [
  { path: 'h', component: PersonHomeComponent },
  { path: '', redirectTo: 'h', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
