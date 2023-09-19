import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2InputFieldsComponent } from './page-2-input-fields.component';

describe('Page2InputFieldsComponent', () => {
  let component: Page2InputFieldsComponent;
  let fixture: ComponentFixture<Page2InputFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2InputFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2InputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
