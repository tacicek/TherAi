import { supabase } from './supabase';

// Test Supabase connection
export async function testConnection() {
  if (!import.meta.env.PUBLIC_SUPABASE_URL || !import.meta.env.PUBLIC_SUPABASE_ANON_KEY) {
    console.log('⚠️ Supabase not configured. Please add your credentials to .env file');
    return false;
  }
  
  try {
    const { data, error } = await supabase.from('team_members').select('count').limit(1);
    if (error) throw error;
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (error) {
    console.log('⚠️ Supabase connection failed. Please check your credentials in .env file');
    return false;
  }
}

// Contact form service
export const contactService = {
  async submitContact(formData: { 
    firstName: string; 
    lastName: string; 
    email: string; 
    organization?: string; 
    interest?: string; 
    message: string; 
  }) {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          interest: formData.interest,
          message: formData.message
        }])
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