import { AfterViewInit, Component } from '@angular/core';

import projects from '../assets/database/projects.json';
import technologies from '../assets/database/technologies.json';

import { Project } from './models/project.model';
import { Technology } from './models/technologies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  isLoading: boolean;
  projects: Project[] = projects;
  technologies: Technology[] = technologies;

  constructor() {
    this.isLoading = true;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  getAlign({ x, y }) {
    return { 'grid-row': `${y} / span 3`, 'grid-column': `${x} / span 2` };
  }
}
