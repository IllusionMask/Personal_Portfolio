import { Component } from '@angular/core';
import { ResponsiveDirective } from '../directives/responsive.directive';
import { WorkExpComponent } from '../work-exp/work-exp.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-edu-work-side',
  standalone: true,
  imports: [ResponsiveDirective, WorkExpComponent, EducationComponent],
  templateUrl: './edu-work-side.component.html',
  styleUrl: './edu-work-side.component.css'
})
export class EduWorkSideComponent {

}
