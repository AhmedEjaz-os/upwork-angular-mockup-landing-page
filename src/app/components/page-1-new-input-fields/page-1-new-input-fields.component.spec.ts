import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1NewInputFieldsComponent } from './page-1-new-input-fields.component';

describe('Page1NewInputFieldsComponent', () => {
  let component: Page1NewInputFieldsComponent;
  let fixture: ComponentFixture<Page1NewInputFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1NewInputFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1NewInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
