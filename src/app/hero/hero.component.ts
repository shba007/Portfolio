import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typewriter from './Typewriter';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('textContent') textContent: ElementRef;

  constructor() {}
  ngAfterViewInit(): void {
    const textElem = this.textContent.nativeElement;
    const typewriter = new Typewriter(textElem);

    typewriter
      .pause(2500)
      .type('Following the ')
      .markup('<br>')
      .type('"Logical Sequential Steps" ')
      .markup('<br>')
      .type('to avoid ')
      .pause(50)
      .type('Failure')
      .pause(300)
      .delete(7)
      .pause(500)
      .type('Error')
      .pause(250)
      .delete(5)
      .pause(1500)
      .type('Failure+Error')
      .replace(13, 'FailError', 'highlight')
      .start();
  }
}
