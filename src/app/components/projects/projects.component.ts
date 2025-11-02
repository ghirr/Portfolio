import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/superbase.service';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects:any=[];
  private viewInitialized = false;

  constructor(private supabaseService:SupabaseService){}
  
  ngOnInit(): void {
    this.fetchProjects()
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    // Try to initialize carousels if projects are already loaded
    if (this.projects.length > 0) {
      setTimeout(() => this.initializeCarousels(), 200);
    }
  }

  async fetchProjects() {
    try {
      this.projects = await this.supabaseService.getProjectsWithDetails();
      // Initialize carousels after projects are loaded and view is ready
      if (this.viewInitialized) {
        setTimeout(() => this.initializeCarousels(), 200);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }

  private initializeCarousels(): void {
    this.projects.forEach((project: any) => {
      const carouselId = `#carouselExampleIndicators${project.id}`;
      const carouselElement = $(carouselId);
      
      if (carouselElement.length > 0) {
        // Destroy existing carousel instance if any
        const carousel = carouselElement.data('bs.carousel');
        if (carousel) {
          carousel.dispose();
        }
        
        // Initialize carousel with 10 second interval
        carouselElement.carousel({
          interval: 10000,
          wrap: true,
          pause: 'hover'
        });
      }
    });
  }
  async fetchTechnologies() {
    try {
      this.projects = await this.supabaseService.getAllTechnologies();
      
    } catch (error) {
      console.error('Error fetching technologies:', error);
    }
  }
  

}
