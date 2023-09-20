import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2InputFieldsVerticleComponent } from './page-2-input-fields-verticle.component';

describe('Page2InputFieldsVerticleComponent', () => {
  let component: Page2InputFieldsVerticleComponent;
  let fixture: ComponentFixture<Page2InputFieldsVerticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2InputFieldsVerticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2InputFieldsVerticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
