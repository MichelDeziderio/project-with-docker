import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToastAlertComponent } from '../shared/toast-alert/toast-alert.component';
import { MergeForCategory } from '../shared/utils/merge-lauche-and-category';

import { CrudAppComponent } from './crud-app.component';

const alertStubby = { open: () => ({}) }
const laucheStubby = [
  {
    id: '7c208553-4ccc-4ced-89cc-d00fb34108e2',
    idCategoria: '23d8826a-3e12-4025-b0a1-bdc08fdb606d',
    description: 'Almoço na Padaria',
    date: '21/10/2020',
    value: 29.5
  },
  {
    id: '68516374-cf76-44cb-ab21-f9bd63c8bba7',
    idCategoria: '59955474-b1e2-4fda-aa20-daf98ea93f1e',
    description: 'Passagem de Avião para o Guarujá',
    date: '20/10/2020',
    value: 1831.1
  }
];

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

const result = [
  {
    id: '7c208553-4ccc-4ced-89cc-d00fb34108e2',
    idCategoria: '23d8826a-3e12-4025-b0a1-bdc08fdb606d',
    description: 'Almoço na Padaria',
    date: '21/10/2020',
    name: 'Alimentação',
    category: 'Alimentação',
    value: 29.5
  },
  {
    id: '68516374-cf76-44cb-ab21-f9bd63c8bba7',
    idCategoria: '59955474-b1e2-4fda-aa20-daf98ea93f1e',
    description: 'Passagem de Avião para o Guarujá',
    date: '20/10/2020',
    name: 'Transporte',
    category: 'Transporte',
    value: 1831.1
  }
]

describe('CrudAppComponent', () => {
  let component: CrudAppComponent;
  let fixture: ComponentFixture<CrudAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudAppComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ToastAlertComponent, useValue: alertStubby }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CrudAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test func getLauches', () => {
    spyOn(component.service, 'getLaunches').and.returnValues(of(laucheStubby));
    component.getLauches();
    expect(component.primaryData).toEqual(laucheStubby);
    expect(component.getCategorys).toBeTruthy();
  });

  xit('should test func getCategorys', () => {
    spyOn(component.service, 'getCategorys').and.returnValues(of(categoryStubby));
    component.getCategorys();
    component.dataSource = MergeForCategory(laucheStubby, categoryStubby);
    expect(MergeForCategory).toBeTruthy();
    expect(component.dataSource).toEqual(result);
  });

  it('should test func newLauche', () => {
    spyOn(component.router, 'navigate');
    component.newLauche();
    expect(component.router.navigate).toHaveBeenCalledWith(['lauches/register']);
  });

  it('should test func viewLauches', () => {
    spyOn(component.router, 'navigate');
    component.viewLauches('68516374-cf76-44cb-ab21-f9bd63c8bba7');
    expect(component.router.navigate).toHaveBeenCalledWith(['lauches/view/68516374-cf76-44cb-ab21-f9bd63c8bba7']);
  });

  it('should test func editLauches', () => {
    spyOn(component.router, 'navigate');
    component.editLauches('68516374-cf76-44cb-ab21-f9bd63c8bba7');
    expect(component.router.navigate).toHaveBeenCalledWith(['lauches/edit/68516374-cf76-44cb-ab21-f9bd63c8bba7']);
  });

  it('should test func deleteLaunche', () => {
    spyOn(component.service, 'deleteLaunche').and.returnValues(of({}));
    spyOn(component.alert, 'open')
    component.deleteLauches('68516374-cf76-44cb-ab21-f9bd63c8bba7');
    expect(component.getLauches).toBeTruthy();
    expect(component.alert.open).toBeTruthy();
  });

  it('should test func openAlerts', () => {
    spyOn(component.alert, 'open')
    component.openAlerts('Seu lançamento foi deletado! 😊');
    expect(component.alert.open).toBeTruthy();
  });

});
