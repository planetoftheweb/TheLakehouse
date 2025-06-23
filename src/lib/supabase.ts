import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are properly configured
if (!supabaseUrl || supabaseUrl === 'your_supabase_project_url' || !supabaseUrl.startsWith('https://')) {
  throw new Error(
    'Missing or invalid VITE_SUPABASE_URL. Please set up your Supabase project by clicking "Connect to Supabase" in the top right corner, or manually add your Supabase URL to the .env file.'
  );
}

if (!supabaseAnonKey || supabaseAnonKey === 'your_supabase_anon_key') {
  throw new Error(
    'Missing or invalid VITE_SUPABASE_ANON_KEY. Please set up your Supabase project by clicking "Connect to Supabase" in the top right corner, or manually add your Supabase anonymous key to the .env file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);