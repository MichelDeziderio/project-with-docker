import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdRegisterCategoryComponent } from './curd-register-category.component';

describe('CurdRegisterCategoryComponent', () => {
  let component: CurdRegisterCategoryComponent;
  let fixture: ComponentFixture<CurdRegisterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdRegisterCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdRegisterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
