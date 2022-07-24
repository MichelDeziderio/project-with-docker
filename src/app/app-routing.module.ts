import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditViewComponent } from './crud-app/crud-edit-view/crud-edit-view.component';
import { CrudRegisterComponent } from './crud-app/crud-register/crud-register.component';
import { CrudCategorysComponent } from './crud-categorys/crud-categorys.component';
import { CrudEditViewCategoryComponent } from './crud-categorys/crud-edit-view-category/crud-edit-view-category.component';
import { CrudRegisterCategoryComponent } from './crud-categorys/crud-register-category/crud-register-category.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lauches' },
  { path: 'lauches', component: CrudAppComponent },
  { path: 'lauches/view/:id', component: CrudEditViewComponent },
  { path: 'lauches/edit/:id', component: CrudEditViewComponent },
  { path: 'lauches/register', component: CrudRegisterComponent },
  { path: 'categorys', component: CrudCategorysComponent },
  { path: 'categorys/view/:id', component: CrudEditViewCategoryComponent },
  { path: 'categorys/edit/:id', component: CrudEditViewCategoryComponent },
  { path: 'categorys/register', component: CrudRegisterCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
