import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditViewComponent } from './crud-app/crud-edit-view/crud-edit-view.component';
import { CrudRegisterComponent } from './crud-app/crud-register/crud-register.component';
import { CrudCategorysComponent } from './crud-categorys/crud-categorys.component';
import { CurdEditViewCategoryComponent } from './crud-categorys/curd-edit-view-category/curd-edit-view-category.component';
import { CurdRegisterCategoryComponent } from './crud-categorys/curd-register-category/curd-register-category.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lauches' },
  { path: 'lauches', component: CrudAppComponent },
  { path: 'lauches/view/:id', component: CrudEditViewComponent },
  { path: 'lauches/edit/:id', component: CrudEditViewComponent },
  { path: 'lauches/register', component: CrudRegisterComponent },
  { path: 'categorys', component: CrudCategorysComponent },
  { path: 'categorys/view/:id', component: CurdEditViewCategoryComponent },
  { path: 'categorys/edit/:id', component: CurdEditViewCategoryComponent },
  { path: 'categorys/register', component: CurdRegisterCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
