import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-public-api-key';

const supabase = createClient(supabaseUrl, supabaseKey);
