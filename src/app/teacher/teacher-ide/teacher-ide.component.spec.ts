import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherIdeComponent } from './teacher-ide.component';

describe('TeacherIdeComponent', () => {
  let component: TeacherIdeComponent;
  let fixture: ComponentFixture<TeacherIdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherIdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
