import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtFormComponent } from './vt-form.component';

describe('VtFormComponent', () => {
  let component: VtFormComponent;
  let fixture: ComponentFixture<VtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
