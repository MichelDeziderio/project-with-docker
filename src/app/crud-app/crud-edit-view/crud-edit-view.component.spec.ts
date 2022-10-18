import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

import { CrudEditViewComponent } from './crud-edit-view.component';

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

describe('CrudEditViewComponentTestes', () => {
  describe('View category test', viewLauche)
  describe('Edit category test', editLauche)
});


function viewLauche() {
  describe('CrudEditViewComponent', () => {

    const paramsUrl = {
      snapshot: {
        url: [
          {
            path: "lauches",
            parameters: {}
          },
          {
            path: "view",
            parameters: {}
          },
          {
            path: "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
            parameters: {}
          }
        ]
      }
    }

    let component: CrudEditViewComponent;
    let fixture: ComponentFixture<CrudEditViewComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CrudEditViewComponent],
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
          { provide: ActivatedRoute, useValue: paramsUrl },
          { provide: ToastAlertComponent, useValue: alertStubby },
          { provide: DateAdapter, useValue: setLocale },
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(CrudEditViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should test getCategory view', () => {

      spyOn(component.service, 'getLauncheById').and.returnValues(of(result));

      component.editLauche();
      expect(component.title).toEqual('Visualizar lançamento');
      expect(component.disabledForm).toEqual(true);
      expect(component.getLauche).toEqual([result]);

    });

    it('should test func backPage', () => {
      spyOn(component.router, 'navigate');
      component.backPage();
      expect(component.router.navigate).toHaveBeenCalledWith(['lauches']);
    });
  });

}

function editLauche() {
  describe('CrudEditViewComponent', () => {

    const paramsUrl = {
      snapshot: {
        url: [
          {
            path: "lauches",
            parameters: {}
          },
          {
            path: "edit",
            parameters: {}
          },
          {
            path: "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
            parameters: {}
          }
        ]
      }
    }

    let component: CrudEditViewComponent;
    let fixture: ComponentFixture<CrudEditViewComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CrudEditViewComponent],
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
          { provide: ActivatedRoute, useValue: paramsUrl },
          { provide: ToastAlertComponent, useValue: alertStubby },
          { provide: DateAdapter, useValue: setLocale },
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(CrudEditViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should test getCategory view', () => {

      spyOn(component.service, 'getLauncheById').and.returnValues(of(result));

      component.editLauche();
      expect(component.title).toEqual('Editar lançamento');
      expect(component.disabledForm).toEqual(false);
      expect(component.getLauche).toEqual([result]);

    });

    it('should test func backPage', () => {
      spyOn(component.router, 'navigate');
      component.backPage();
      expect(component.router.navigate).toHaveBeenCalledWith(['lauches']);
    });

    it('should test func save', () => {
      spyOn(component.service, 'putLaunches').and.returnValues(of({}));
      spyOn(component.alert, 'open')
      
      component.formEdit.get('description')?.setValue('Manutenção do carro');
      component.formEdit.get('date')?.setValue('24/07/2022');
      component.formEdit.get('value')?.setValue(1200.0);

      expect(component.alert.open).toBeTruthy();
    });

    it('should test func openAlerts', () => {
      spyOn(component.alert, 'open')
      component.openAlerts('Seu lançamento foi atualizado! 😊');
      expect(component.alert.open).toBeTruthy();
    });
  });
}

