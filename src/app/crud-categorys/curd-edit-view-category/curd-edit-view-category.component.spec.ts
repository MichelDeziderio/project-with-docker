import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdEditViewCategoryComponent } from './curd-edit-view-category.component';

describe('CurdEditViewCategoryComponent', () => {
  let component: CurdEditViewCategoryComponent;
  let fixture: ComponentFixture<CurdEditViewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdEditViewCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdEditViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
