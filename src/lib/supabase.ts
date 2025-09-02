import { createClient } from '@supabase/supabase-js'

// Debug environment variables
console.log('Environment check:', {
  url: import.meta.env.PUBLIC_SUPABASE_URL,
  key: import.meta.env.PUBLIC_SUPABASE_ANON_KEY ? 'Present' : 'Missing',
  allEnv: import.meta.env
});

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing environment variables:', { supabaseUrl, supabaseAnonKey });
  throw new Error(`Missing Supabase environment variables. URL: ${supabaseUrl ? 'Present' : 'Missing'}, Key: ${supabaseAnonKey ? 'Present' : 'Missing'}`)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

// Database types (will be generated from your schema)
export type Database = {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string
          name: string
          position: string
          department: string
          bio: string
          avatar: string
          linkedin?: string
          email: string
          specialties: string[]
          active: boolean
          order: number
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          position: string
          department: string
          bio: string
          avatar: string
          linkedin?: string
          email: string
          specialties?: string[]
          active?: boolean
          order?: number
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          position?: string
          department?: string
          bio?: string
          avatar?: string
          linkedin?: string
          email?: string
          specialties?: string[]
          active?: boolean
          order?: number
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          slug: string
          description: string
          content?: string
          category: string
          status: 'active' | 'completed' | 'in-progress'
          start_date: string
          end_date?: string
          technologies: string[]
          team_members: string[]
          featured: boolean
          images: string[]
          results?: string
          publications?: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description: string
          content?: string
          category: string
          status: 'active' | 'completed' | 'in-progress'
          start_date: string
          end_date?: string
          technologies?: string[]
          team_members?: string[]
          featured?: boolean
          images?: string[]
          results?: string
          publications?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string
          content?: string
          category?: string
          status?: 'active' | 'completed' | 'in-progress'
          start_date?: string
          end_date?: string
          technologies?: string[]
          team_members?: string[]
          featured?: boolean
          images?: string[]
          results?: string
          publications?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          organization?: string
          interest?: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          organization?: string
          interest?: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          organization?: string
          interest?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}