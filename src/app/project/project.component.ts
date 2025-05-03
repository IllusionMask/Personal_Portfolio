import { Component } from '@angular/core';
import { Project } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projectList: Project[] = [
    {
      title: 'Project One',
      technologies: 'Java, Spring, Angular',
      description: [
        'Worked as a web developer to develop desktop web application and mobile application on Goolge Play store',
        'Leaned Spring framework related techonologies such as Spring Batch and Spring Security',
        'Work with teams for support and maintenance related task'
      ]
    },
    {
      title: 'Project Two',
      technologies: 'Java, Spring, Flutter',
      description: [
        'Worked as a web developer to develop desktop web application and mobile application on Goolge Play store',
        'Leaned Spring framework related techonologies such as Spring Batch and Spring Security',
        'Work with teams for support and maintenance related task'
      ]
    },
    {
      title: 'Project Three',
      technologies: 'Java, Spring, Angular',
      description: [
        'Worked as a web developer to develop desktop web application and mobile application on Goolge Play store',
        'Leaned Spring framework related techonologies such as Spring Batch and Spring Security',
        'Work with teams for support and maintenance related task'
      ]
    },
  ]

  constructor() {};

  ngOnInit(): void {

  }
}
