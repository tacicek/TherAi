/*
  # Initial Ther-AI Database Schema

  1. New Tables
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text)
      - `position` (text)
      - `department` (text)
      - `bio` (text)
      - `avatar` (text)
      - `linkedin` (text, optional)
      - `email` (text)
      - `specialties` (text array)
      - `active` (boolean, default true)
      - `order` (integer, default 99)
      - `featured` (boolean, default false)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `content` (text)
      - `category` (text)
      - `status` (text)
      - `start_date` (date)
      - `end_date` (date, optional)
      - `technologies` (text array)
      - `team_members` (text array)
      - `featured` (boolean, default false)
      - `images` (text array)
      - `results` (text, optional)
      - `publications` (text array, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `contact_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `organization` (text, optional)
      - `interest` (text, optional)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on team_members and projects
    - Add policies for contact form submissions
*/

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  department text NOT NULL,
  bio text NOT NULL,
  avatar text NOT NULL,
  linkedin text,
  email text NOT NULL,
  specialties text[] DEFAULT '{}',
  active boolean DEFAULT true,
  "order" integer DEFAULT 99,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  content text,
  category text NOT NULL,
  status text NOT NULL CHECK (status IN ('active', 'completed', 'in-progress')),
  start_date date NOT NULL,
  end_date date,
  technologies text[] DEFAULT '{}',
  team_members text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  images text[] DEFAULT '{}',
  results text,
  publications text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  organization text,
  interest text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for team_members (public read access)
CREATE POLICY "Team members are publicly readable"
  ON team_members
  FOR SELECT
  TO public
  USING (true);

-- Create policies for projects (public read access)
CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Create policies for contact_submissions (public insert only)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_team_members_active ON team_members(active);
CREATE INDEX IF NOT EXISTS idx_team_members_featured ON team_members(featured);
CREATE INDEX IF NOT EXISTS idx_team_members_order ON team_members("order");
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);

-- Insert sample team members
INSERT INTO team_members (name, position, department, bio, avatar, linkedin, email, specialties, active, "order", featured) VALUES
('Prof. Dr. Sarah Chen', 'Chief AI Officer & Professor', 'Executive', 'Leading AI researcher and Professor of Medical Informatics with 15+ years experience in medical imaging and deep learning. Former Head of AI Research at Stanford Medical Center.', 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg', 'https://linkedin.com/in/sarahchen', 'sarah.chen@ther-ai.com', ARRAY['Medical AI', 'Deep Learning', 'Computer Vision', 'Healthcare Innovation'], true, 1, true),
('Prof. Dr. Michael Rodriguez', 'Professor of Oncology & Senior AI Researcher', 'Research', 'Professor of Oncology and AI researcher specialized in oncological AI applications with focus on early cancer detection systems and treatment planning.', 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg', 'https://linkedin.com/in/michaelrodriguez', 'michael.rodriguez@ther-ai.com', ARRAY['Oncology', 'Cancer Detection', 'Medical Imaging', 'Treatment Planning'], true, 2, true),
('Dr. Emily Thompson, MD', 'Chief Medical Officer', 'Medical', 'Board-certified radiologist and medical doctor specializing in AI-assisted diagnostic imaging and clinical decision support systems.', 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg', 'https://linkedin.com/in/emilythompson', 'emily.thompson@ther-ai.com', ARRAY['Radiology', 'Medical Imaging', 'Clinical AI', 'Diagnostic Systems'], true, 3, false);

-- Insert sample projects
INSERT INTO projects (title, slug, description, content, category, status, start_date, end_date, technologies, team_members, featured, images, results, publications) VALUES
('AI-Powered Cancer Detection System', 'cancer-detection-ai', 'Revolutionary early-stage cancer detection using advanced deep learning algorithms', 'Our flagship cancer detection system leverages state-of-the-art deep learning to identify potential malignancies in medical imaging with unprecedented accuracy. The system has been trained on over 1 million medical images and validated across multiple healthcare institutions.', 'Oncology', 'active', '2024-01-15', '2024-12-31', ARRAY['TensorFlow', 'Python', 'DICOM', 'PyTorch', 'Medical Imaging'], ARRAY['dr-sarah-chen', 'dr-michael-rodriguez'], true, ARRAY['https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg', 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg'], '95% accuracy in early-stage detection, 40% reduction in false positives', ARRAY['Nature Medicine 2024', 'Journal of Medical AI 2024']),
('Radiology AI Assistant', 'radiology-assistant', 'Intelligent radiology workflow optimization and diagnostic support system', 'An intelligent assistant that streamlines radiology workflows by automatically prioritizing urgent cases, suggesting relevant prior studies, and providing preliminary analysis to support radiologist decision-making.', 'Radiology', 'in-progress', '2023-08-01', NULL, ARRAY['Vue.js', 'FastAPI', 'PostgreSQL', 'DICOM', 'HL7 FHIR'], ARRAY['dr-sarah-chen', 'dr-emily-thompson'], true, ARRAY['https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg', 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg'], '30% reduction in report turnaround time, 25% improvement in diagnostic confidence', ARRAY[]),
('Digital Pathology Platform', 'pathology-digitization', 'AI-enhanced digital pathology platform for automated tissue analysis', 'A comprehensive digital pathology solution that enables remote consultation, automated tissue analysis, and improved collaboration between pathologists.', 'Pathology', 'completed', '2023-03-01', '2024-02-28', ARRAY['React', 'Node.js', 'OpenSeadragon', 'Python', 'Computer Vision'], ARRAY['dr-emily-thompson'], false, ARRAY['https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg'], 'Deployed at 8 medical centers, 50% faster pathology reporting', ARRAY[]);