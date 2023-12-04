import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningBadgeComponent } from './warning-badge.component';

describe('WarningBadgeComponent', () => {
  let component: WarningBadgeComponent;
  let fixture: ComponentFixture<WarningBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
