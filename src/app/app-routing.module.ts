import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditComponent } from './crud-app/crud-edit/crud-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lauches' },
  { path: 'lauches', component: CrudAppComponent },
  { path: 'edit/:id', component: CrudEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
