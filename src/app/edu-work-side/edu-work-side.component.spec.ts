import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduWorkSideComponent } from './edu-work-side.component';

describe('EduWorkSideComponent', () => {
  let component: EduWorkSideComponent;
  let fixture: ComponentFixture<EduWorkSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduWorkSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduWorkSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
