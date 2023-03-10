import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdeComponent } from './student-ide.component';

describe('StudentIdeComponent', () => {
  let component: StudentIdeComponent;
  let fixture: ComponentFixture<StudentIdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
