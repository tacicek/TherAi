import { supabase } from './supabase'

// Team management functions
export const teamService = {
  async getAllTeam() {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('active', true)
      .order('order', { ascending: true })
    
    if (error) throw error
    return data
  },

  async getFeaturedTeam() {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('active', true)
      .eq('featured', true)
      .order('order', { ascending: true })
      .limit(3)
    
    if (error) throw error
    return data
  },

  async getTeamMember(id: string) {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  }
}

// Projects management functions
export const projectsService = {
  async getAllProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getFeaturedProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(3)
    
    if (error) throw error
    return data
  },

  async getProject(slug: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    return data
  },

  async getProjectsByCategory(category: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }
}

// Contact form submission
export const contactService = {
  async submitContact(formData: {
    firstName: string
    lastName: string
    email: string
    organization?: string
    interest?: string
    message: string
  }) {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        organization: formData.organization,
        interest: formData.interest,
        message: formData.message,
        created_at: new Date().toISOString()
      }])
    
    if (error) throw error
    return data
  }
}