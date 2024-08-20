import { AfterViewInit, Component } from '@angular/core';
import { SupabaseService } from './services/superbase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  aboutData: any;

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    this.aboutData = await this.supabaseService.getJsonFile();

    // Set the favicon dynamically
    if (this.aboutData && this.aboutData.avatar) {
      this.setFavicon(this.aboutData.avatar);
    }
    if(this.aboutData && this.aboutData.intro){
      this.setIntroImage(this.aboutData.intro)
    }
    
  }

  setFavicon(url: string) {
    const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (link) {
      link.href = url;
    }
  }

  setIntroImage(url: string) {
    const imgElement = document.querySelector('.intro-logo img');
    if (imgElement) {
      imgElement.setAttribute('src', url);
    }
  }
  
}