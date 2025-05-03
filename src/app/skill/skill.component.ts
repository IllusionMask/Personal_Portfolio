import { Component } from '@angular/core';
import { Skill } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  skillList: Skill[] = [
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Java, Spring',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Flutter',
      level: 'Intermediate',
      rating: 80,
    },
  ];

  constructor() {};

  ngOnInit(): void {

  }
}
