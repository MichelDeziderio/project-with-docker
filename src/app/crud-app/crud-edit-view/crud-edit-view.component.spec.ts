import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEditViewComponent } from './crud-edit-view.component';

xdescribe('CrudEditViewComponent', () => {
  let component: CrudEditViewComponent;
  let fixture: ComponentFixture<CrudEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEditViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
