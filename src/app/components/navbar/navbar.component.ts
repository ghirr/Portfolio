import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const navLinks = this.el.nativeElement.querySelectorAll('.custom-navbar .nav .link');
    const navToggle = this.el.nativeElement.querySelector('#nav-toggle');
    const navMenu = this.el.nativeElement.querySelector('ul.nav');

    navLinks.forEach((link:any) => {
      this.renderer.listen(link, 'click', (event) => {
        const target = event.target as HTMLAnchorElement;
        if (target.hash !== "") {
          event.preventDefault();
          const hash = target.hash;
          const targetElement = this.el.nativeElement.querySelector(hash);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
            });

            window.history.pushState(null, '', hash);
          }
        }
      });
    });

    this.renderer.listen(navToggle, 'click', () => {
      if (navToggle.classList.contains('is-active')) {
        this.renderer.removeClass(navToggle, 'is-active');
      } else {
        this.renderer.addClass(navToggle, 'is-active');
      }

      if (navMenu.classList.contains('show')) {
        this.renderer.removeClass(navMenu, 'show');
      } else {
        this.renderer.addClass(navMenu, 'show');
      }
    });
  }
}