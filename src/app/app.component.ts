import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from "./skill/skill.component";
import { BannerComponent } from "./banner/banner.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { EducationComponent } from "./education/education.component";
import { WorkExpComponent } from "./work-exp/work-exp.component";
import { ProjectComponent } from "./project/project.component";
import { ContactComponent } from "./contact/contact.component";
import { LayoutModule } from '@angular/cdk/layout';
import { ResponsiveDirective } from './directives/responsive.directive';
import { EduWorkSideComponent } from './edu-work-side/edu-work-side.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkillComponent, BannerComponent, PersonalInfoComponent, EducationComponent, 
    WorkExpComponent, ProjectComponent, ContactComponent, ResponsiveDirective, EduWorkSideComponent,
    LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-portfolio-webapp';
}
