import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Technology } from '../models/technologies.model';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss'],
})
export class HexagonComponent implements OnInit {
  @Input() technology: Technology;

  title: string;
  path: SafeUrl;

  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.title = this.technology.title;
    this.path = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.technology.path
    );
  }
}
