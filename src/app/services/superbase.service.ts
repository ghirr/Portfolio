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

  async getAllTechnologies() {
    const { data, error } = await this.supabase.from('technologie').select('*');
    if (error) throw error;
    return data;
  }

  async getJsonFile(): Promise<any> {
    const timestamp = new Date().getTime(); // Generate a unique timestamp
    const { data, error } = await this.supabase.storage
      .from('public/docs')
      .download(`about.json?t=${timestamp}`); // Append the timestamp as a query parameter
  
    if (error) {
      console.error('Error downloading JSON file:', error);
      return null;
    }
  
    const text = await data.text();
    return JSON.parse(text);
  }
  
}
