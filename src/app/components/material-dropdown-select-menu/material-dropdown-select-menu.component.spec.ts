import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDropdownSelectMenuComponent } from './material-dropdown-select-menu.component';

describe('MaterialDropdownSelectMenuComponent', () => {
  let component: MaterialDropdownSelectMenuComponent;
  let fixture: ComponentFixture<MaterialDropdownSelectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDropdownSelectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDropdownSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
