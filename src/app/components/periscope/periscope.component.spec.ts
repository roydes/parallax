import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriscopeComponent } from './periscope.component';

describe('PeriscopeComponent', () => {
  let component: PeriscopeComponent;
  let fixture: ComponentFixture<PeriscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
