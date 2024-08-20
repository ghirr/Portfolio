import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/superbase.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit{
  technologies:any=[];
  constructor(private supabaseService:SupabaseService){}
  ngOnInit(): void {
    this.getTechnologies();
  }
  async getTechnologies(){
    this.technologies=await this.supabaseService.getAllTechnologies();
  }

  
}
