import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRegisterComponent } from './crud-register.component';

describe('CrudRegisterComponent', () => {
  let component: CrudRegisterComponent;
  let fixture: ComponentFixture<CrudRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
