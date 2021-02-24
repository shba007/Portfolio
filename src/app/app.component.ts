import { Component } from '@angular/core';

import projects from './database/projects.json';
import technologies from './database/technologies.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  projects = projects;
  technologies = technologies;
}
