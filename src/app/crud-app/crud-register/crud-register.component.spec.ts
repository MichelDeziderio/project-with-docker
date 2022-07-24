import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

import { CrudRegisterComponent } from './crud-register.component';

const alertStubby = { open: () => ({}) }
const setLocale = { setLocale: () => ({}) }

const categoryStubby = [
  {
    id: '59955474-b1e2-4fda-aa20-daf98ea93f1e',
    name: 'Transporte'
  },
  {
    id: '23d8826a-3e12-4025-b0a1-bdc08fdb606d',
    name: 'Alimentação'
  }
];

const result = {
  id: '7c208553-4ccc-4ced-89cc-d00fb34108e2',
  idCategoria: '59955474-b1e2-4fda-aa20-daf98ea93f1e',
  description: 'Manutenção do carro',
  date: '24/07/2022',
  value: 1200.0
}

describe('CrudRegisterComponent', () => {
  let component: CrudRegisterComponent;
  let fixture: ComponentFixture<CrudRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudRegisterComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      ],
      providers: [
        { provide: ToastAlertComponent, useValue: alertStubby },
        { provide: DateAdapter, useValue: setLocale }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CrudRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Criar lançamento');
  });

  it('should test func backPage', () => {
    spyOn(component.router, 'navigate');
    component.backPage();
    expect(component.router.navigate).toHaveBeenCalledWith(['lauches']);
  });

  it('should test func getCategorys', () => {
    spyOn(component.service, 'getCategorys').and.returnValues(of(categoryStubby));
    component.getCategorys();
    expect(component.listCategorys).toEqual(categoryStubby);
  });

  it('should test func save', () => {
    spyOn(component.service, 'postLaunches').and.returnValues(of(result));

    component.registerLauche.get('description')?.setValue('Manutenção do carro');
    component.registerLauche.get('date')?.setValue('24/07/2022');
    component.registerLauche.get('value')?.setValue(1200.0);
    component.registerLauche.get('category')?.setValue('59955474-b1e2-4fda-aa20-daf98ea93f1e');

    component.register();
    expect(component.backPage).toBeTruthy();
    expect(component.alert.open).toBeTruthy();
  });

  it('should test func openAlerts', () => {
    spyOn(component.alert, 'open')
    component.openAlerts('Seu lançamento foi cadastrado! 😊');
    expect(component.alert.open).toBeTruthy();
  });

});
