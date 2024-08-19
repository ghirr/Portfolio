import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseapiUrl,
      environment.supabaseapiKey
    );
  }

  // Fetch all projects with their tasks, images, and technologies
  async getProjectsWithDetails() {
    const { data, error } = await this.supabase
      .from('project')
      .select(`
        *,
        project_tasks(*),
        images(*),
        project_technologies(technologie(*))
      `).order('id', { ascending: false });;

    if (error) throw error;
    return data;
  }

  // Fetch all technologies
  async getAllTechnologies() {
    const { data, error } = await this.supabase.from('technologie').select('*');
    if (error) throw error;
    return data;
  }
}
