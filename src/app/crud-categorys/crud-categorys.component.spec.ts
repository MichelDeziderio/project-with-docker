import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCategorysComponent } from './crud-categorys.component';

describe('CrudCategorysComponent', () => {
  let component: CrudCategorysComponent;
  let fixture: ComponentFixture<CrudCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCategorysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
