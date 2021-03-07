import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

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
    /* typewriter
      .pause(2500)
      .type('Following the <br>"Logical Sequential Steps" <br>to avoid')
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
      .replace(13, '<span class="highlight">FailError</span>')
      .start();
 */
    typewriter
      .pauseFor(2500)
      .typeString('Following the <br>"Logical Sequential Steps" <br>to avoid ')
      .pauseFor(50)
      .typeString(`Failure`)
      .pauseFor(300)
      .deleteChars(7)
      .pauseFor(500)
      .typeString(`Error`)
      .pauseFor(250)
      .deleteChars(5)
      .pauseFor(1500)
      .typeString(`<span id="highlight">Failure+Error</span>`)
      .callFunction(() => {
        textElem.querySelector('#highlight').textContent = 'FailError';
      })
      .start();
  }
}
