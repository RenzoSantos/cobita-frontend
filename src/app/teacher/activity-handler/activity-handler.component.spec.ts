import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityHandlerComponent } from './activity-handler.component';

describe('ActivityHandlerComponent', () => {
  let component: ActivityHandlerComponent;
  let fixture: ComponentFixture<ActivityHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
