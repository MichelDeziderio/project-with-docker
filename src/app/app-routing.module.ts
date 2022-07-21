import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditViewComponent } from './crud-app/crud-edit-view/crud-edit-view.component';
import { CrudRegisterComponent } from './crud-app/crud-register/crud-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lauches' },
  { path: 'lauches', component: CrudAppComponent },
  { path: 'lauches/view/:id', component: CrudEditViewComponent },
  { path: 'lauches/edit/:id', component: CrudEditViewComponent },
  { path: 'lauches/register', component: CrudRegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
