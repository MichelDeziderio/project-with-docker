import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CrudEditViewComponent } from './crud-app/crud-edit-view/crud-edit-view.component';
import { TableListComponent } from './shared/table-list/table-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CrudRegisterComponent } from './crud-app/crud-register/crud-register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastAlertComponent } from './shared/toast-alert/toast-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudCategorysComponent } from './crud-categorys/crud-categorys.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAppComponent,
    TableListComponent,
    CrudEditViewComponent,
    CrudRegisterComponent,
    CrudCategorysComponent
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
