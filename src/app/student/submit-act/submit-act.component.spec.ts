import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitActComponent } from './submit-act.component';

describe('SubmitActComponent', () => {
  let component: SubmitActComponent;
  let fixture: ComponentFixture<SubmitActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
