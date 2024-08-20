import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import gsap from 'gsap';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const tl: gsap.core.Timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".intro-logo", { y: "0%", duration: 2 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 0.5 }, "-=1");
