import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

    myData: string[][] = [
      ['Name', 'John Doe'],
      ['DOB', '10/10/2025'],
      ['Work Exp', '2 Years'],
      ['Education', 'University'],
      ['Interests', 'Coding']
    ];

    aboutMe: string[] = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'];

    constructor() {}

    ngOnInit() : void {}
}
