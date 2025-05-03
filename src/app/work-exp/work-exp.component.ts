import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-exp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-exp.component.html',
  styleUrl: './work-exp.component.css'
})
export class WorkExpComponent {

  workExperienceList: WorkExperience[] = [
    {
      role: 'Web Developer',
      company: 'ABC Company',
      duration: 'Sep 2022 - Dec 2022',
      description: [
        'Worked with multiple teams to develop web applications',
        'Worked with different technologies such as Java and Spring'
      ]
    },
    {
      role: 'Web Developer',
      company: 'BDE Company',
      duration: 'April 2023 - June 2023',
      description: [
        'Worked with multiple teams to develop web applications',
        'Worked with different technologies such as Java and Spring'
      ]
    },
    {
      role: 'Web Developer',
      company: 'ZXY Company',
      duration: 'July 2023 - Dec 2023',
      description: [
        'Worked with multiple teams to develop web applications',
        'Worked with different technologies such as Java and Spring'
      ]
    },
  ]

  constructor() {};

  ngOnInit() :void {

  }
}
