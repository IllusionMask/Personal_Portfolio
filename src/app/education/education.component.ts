import { Component } from '@angular/core';
import { Education } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educationList: Education[] = [
    {
      institute: "High School",
      course: 'Science',
      duration: '2012-2017',
      score: '70%',
    },
    {
      institute: "University",
      course: 'Foundation',
      duration: '2018-2018',
      score: '90%',
    },
    {
      institute: "University",
      course: 'Degree',
      duration: '2019-2021',
      score: '80%',
    },
    {
      institute: "University",
      course: 'Degree',
      duration: '2019-2021',
      score: '80%',
    }
  ];

  constructor() {};

  ngOnInit() :void {}
}
