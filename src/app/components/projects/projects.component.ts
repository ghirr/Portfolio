import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/superbase.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any=[];
  constructor(private supabaseService:SupabaseService){}
  ngOnInit(): void {
    this.fetchProjects()
    
  }

  async fetchProjects() {
    try {
      this.projects = await this.supabaseService.getProjectsWithDetails();
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }
  async fetchTechnologies() {
    try {
      this.projects = await this.supabaseService.getAllTechnologies();
      
    } catch (error) {
      console.error('Error fetching technologies:', error);
    }
  }
  

}
