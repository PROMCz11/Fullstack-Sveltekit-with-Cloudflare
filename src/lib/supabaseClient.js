import { createClient } from '@supabase/supabase-js'

const publicAPIEndpoint = import.meta.env.VITE_SUPABASE_URL;
const anonAPIKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(publicAPIEndpoint, anonAPIKey);