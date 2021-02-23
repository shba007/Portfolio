import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Project } from '../models/project.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() project: Project;

  title: string;
  path: SafeUrl;
  details: string;
  link: string;

  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.title = this.project.title;
    this.path = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.project.path
    );
    this.details = this.project.details;
    this.link = this.project.link;
  }
}
