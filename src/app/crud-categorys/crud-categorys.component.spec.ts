import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToastAlertComponent } from '../shared/toast-alert/toast-alert.component';

import { CrudCategorysComponent } from './crud-categorys.component';

const alertStubby = { open: () => ({}) }

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

describe('CrudCategorysComponent', () => {
  let component: CrudCategorysComponent;
  let fixture: ComponentFixture<CrudCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCategorysComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ToastAlertComponent, useValue: alertStubby }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test func getCategorys', () => {
    spyOn(component.service, 'getCategorys').and.returnValues(of(categoryStubby));
    component.getCategorys();
    expect(component.dataSource).toEqual(categoryStubby);
  });

  it('should test func newCategorys', () => {
    spyOn(component.router, 'navigate');
    component.newCategorys();
    expect(component.router.navigate).toHaveBeenCalledWith(['categorys/register']);
  });

  it('should test func viewCategorys', () => {
    spyOn(component.router, 'navigate');
    component.viewCategorys('59955474-b1e2-4fda-aa20-daf98ea93f1e');
    expect(component.router.navigate).toHaveBeenCalledWith(['categorys/view/59955474-b1e2-4fda-aa20-daf98ea93f1e']);
  });

  it('should test func editCategorys', () => {
    spyOn(component.router, 'navigate');
    component.editCategorys('59955474-b1e2-4fda-aa20-daf98ea93f1e');
    expect(component.router.navigate).toHaveBeenCalledWith(['categorys/edit/59955474-b1e2-4fda-aa20-daf98ea93f1e']);
  });

  it('should test func deleteCategorys', () => {
    spyOn(component.service, 'deleteCategory').and.returnValues(of({}));
    spyOn(component.alert, 'open')
    component.deleteCategorys('59955474-b1e2-4fda-aa20-daf98ea93f1e');
    expect(component.getCategorys).toBeTruthy();
    expect(component.alert.open).toBeTruthy();
  });

  it('should test func openAlerts', () => {
    spyOn(component.alert, 'open')
    component.openAlerts('Seu categoria foi deletado! 😊');
    expect(component.alert.open).toBeTruthy();
  });

});
