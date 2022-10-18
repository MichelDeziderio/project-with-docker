import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToastAlertComponent } from 'src/app/shared/toast-alert/toast-alert.component';

import { CrudEditViewCategoryComponent } from './crud-edit-view-category.component';

const alertStubby = { open: () => ({}) }

const resultRequest = {
  id: '23d8826a-3e12-4025-b0a1-bdc08fdb606d',
  name: 'Alimentação'
}

describe('CrudEditViewCategoryTests', () => {
  describe('View category test', viewCategory)
  describe('Edit category test', editCategory)
});

function viewCategory() {

  describe('CrudEditViewCategoryComponent', () => {

    const paramsUrl = {
      snapshot: {
        url: [
          {
            path: "categorys",
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

    let component: CrudEditViewCategoryComponent;
    let fixture: ComponentFixture<CrudEditViewCategoryComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CrudEditViewCategoryComponent],
        imports: [
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule
        ],
        providers: [
          { provide: ToastAlertComponent, useValue: alertStubby },
          { provide: ActivatedRoute, useValue: paramsUrl },
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(CrudEditViewCategoryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should test getCategory view', () => {

      spyOn(component.service, 'getCategoryById').and.returnValues(of(resultRequest));

      component.getCategorys();
      expect(component.title).toEqual('Visualizar categoria');
      expect(component.disabledForm).toEqual(true);
      expect(component.dataSource).toEqual(resultRequest);

    });

    it('should test func backPage', () => {
      spyOn(component.router, 'navigate');
      component.backPage();
      expect(component.router.navigate).toHaveBeenCalledWith(['categorys']);
    });

  });
}

function editCategory() {

  describe('CrudEditViewCategoryComponent', () => {

    const paramsUrl = {
      snapshot: {
        url: [
          {
            path: "categorys",
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

    let component: CrudEditViewCategoryComponent;
    let fixture: ComponentFixture<CrudEditViewCategoryComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CrudEditViewCategoryComponent],
        imports: [
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule
        ],
        providers: [
          { provide: ToastAlertComponent, useValue: alertStubby },
          { provide: ActivatedRoute, useValue: paramsUrl },
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(CrudEditViewCategoryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should test getCategory edit', () => {
      spyOn(component.service, 'getCategoryById').and.returnValues(of(resultRequest));

      component.getCategorys();
      expect(component.title).toEqual('Editar categoria');
      expect(component.disabledForm).toEqual(false);
      expect(component.dataSource).toEqual(resultRequest);

    });

    it('should test func backPage', () => {
      spyOn(component.router, 'navigate');
      component.backPage();
      expect(component.router.navigate).toHaveBeenCalledWith(['categorys']);
    });

    it('should test func save', () => {
      spyOn(component.service, 'postCategorys').and.returnValues(of(resultRequest));

      component.formEdit.get('name')?.setValue('Instituições de caridade');

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
}


