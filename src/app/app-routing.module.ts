import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditViewComponent } from './crud-app/crud-edit-view/crud-edit-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lauches' },
  { path: 'lauches', component: CrudAppComponent },
  { path: 'view/:id', component: CrudEditViewComponent },
  { path: 'edit/:id', component: CrudEditViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
