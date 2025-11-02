import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealSection]'
})
export class RevealSectionDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private hasRevealed = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Create Intersection Observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasRevealed) {
            // Add reveal class when section enters viewport
            this.renderer.addClass(entry.target, 'reveal');
            this.hasRevealed = true;
            
            // Stop observing once revealed
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: '-50px 0px' // Start animation slightly before section is fully visible
      }
    );

    // Start observing the section
    if (this.el.nativeElement) {
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

