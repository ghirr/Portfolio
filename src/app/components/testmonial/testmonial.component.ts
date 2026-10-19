import { Component, HostListener, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/superbase.service';


@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit {

  recommendations: any[] = []
  selected: any = null

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.supabaseService.getRecommendationsJsonFile().then((data: any[]) => {
      if (data) {
        this.recommendations = data;
      } else {
        console.error('Failed to load recommendations data.');
      }
    });
  }

  openRecommendation(recommendation: any): void {
    this.selected = recommendation;
  }

  closeRecommendation(): void {
    this.selected = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeRecommendation();
  }

}
