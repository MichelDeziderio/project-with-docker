import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

import { CrudRegisterCategoryComponent } from './crud-register-category.component';

const alertStubby = { open: () => ({}) }

const resultRequest = {
  id: '59955474-b1e2-4fda-aa20-daf98ea93f1e',
  name: 'Transporte'
}

describe('CrudRegisterCategoryComponent', () => {
  let component: CrudRegisterCategoryComponent;
  let fixture: ComponentFixture<CrudRegisterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudRegisterCategoryComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: ToastAlertComponent, useValue: alertStubby }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CrudRegisterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Criar categoria');
  });

  it('should test func backPage', () => {
    spyOn(component.router, 'navigate');
    component.backPage();
    expect(component.router.navigate).toHaveBeenCalledWith(['categorys']);
  });

  it('should test func save', () => {
    spyOn(component.service, 'postCategorys').and.returnValues(of(resultRequest));

    component.regisCategory.get('name')?.setValue('Instituições de caridade');

    component.save();
    expect(component.backPage).toBeTruthy();
    expect(component.alert.open).toBeTruthy();
  });

  it('should test func openAlerts', () => {
    spyOn(component.alert, 'open')
    component.openAlerts('Sua categoria foi cadastrada! 😊');
    expect(component.alert.open).toBeTruthy();
  });

});
