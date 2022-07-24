import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditViewComponent } from './crud-app/crud-edit-view/crud-edit-view.component';
import { CrudRegisterComponent } from './crud-app/crud-register/crud-register.component';
import { CrudCategorysComponent } from './crud-categorys/crud-categorys.component';
import { TableListComponent } from './shared/table-list/table-list.component';
import { ToastAlertComponent } from './shared/toast-alert/toast-alert.component';
import { CrudEditViewCategoryComponent } from './crud-categorys/crud-edit-view-category/crud-edit-view-category.component';
import { CrudRegisterCategoryComponent } from './crud-categorys/crud-register-category/crud-register-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAppComponent,
    TableListComponent,
    CrudEditViewComponent,
    CrudRegisterComponent,
    CrudCategorysComponent,
    CrudRegisterCategoryComponent,
    CrudEditViewCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [ToastAlertComponent, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
