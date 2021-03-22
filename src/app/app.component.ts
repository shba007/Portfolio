import { Component } from '@angular/core';

import projects from '../assets/database/projects.json';
import technologies from '../assets/database/technologies.json';
import email from '../assets/database/email.json';

import { Project } from './models/project.model';
import { Technology } from './models/technologies.model';
import { Email } from './models/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  projects: Project[] = projects;
  technologies: Technology[] = technologies;
  email: Email = email;

  getAlign({ x, y }) {
    return { 'grid-row': `${y} / span 3`, 'grid-column': `${x} / span 2` };
  }
}
