import { supabase } from './supabase';

// Test Supabase connection
export async function testConnection() {
  try {
    const { data, error } = await supabase.from('team_members').select('count').limit(1);
    if (error) throw error;
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Supabase connection failed:', error);
    return false;
  }
}

// Contact form service
export const contactService = {
  async submitContact(formData: { name: string; email: string; message: string }) {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([formData])
        .select();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error };
    }
  }
};

// Team service
export const teamService = {
  async getTeamMembers() {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching team members:', error);
      return { success: false, error };
    }
  }
};

// Projects service
export const projectsService = {
  async getProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching projects:', error);
      return { success: false, error };
    }
  }
};