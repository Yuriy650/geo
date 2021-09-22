import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIpComponent } from './form-ip.component';

describe('FormIpComponent', () => {
  let component: FormIpComponent;
  let fixture: ComponentFixture<FormIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
