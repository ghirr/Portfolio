import { AfterViewInit, Component, Input } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @Input() title: string = '';

  ngAfterViewInit() {
    const greetingElement = document.getElementById('greeting');
    const descriptionElement = document.getElementById('description');
    const subtitleElement = document.getElementById('subtitle');

    if (greetingElement && descriptionElement && subtitleElement) {
      const typewriter = new Typewriter(greetingElement, {
        loop: false,
        delay: 75,
      });

      typewriter
        .typeString('HI!')
        .pauseFor(500) // Pause for 0.5 seconds
        .typeString(' I am ')
        .pauseFor(300) // Pause for 0.3 seconds
        .typeString('Islem Ghariani')
        .pauseFor(500) // Pause for 0.5 seconds
        .callFunction(() => {
          // After typing the name, type the rest in the description
          const typewriter2 = new Typewriter(subtitleElement, {
            loop: false,
            delay: 75,
          });

          typewriter2
            .typeString(this.title)
            .start();
        })
        .start();
    }
  }

}
