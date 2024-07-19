import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pbijvlvzkyvskvwnowfq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiaWp2bHZ6a3l2c2t2d25vd2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyMzY4NzUsImV4cCI6MjAzNjgxMjg3NX0.HqGV72C9JteOF6BPZxVOoAy-NaqJgomjUipRVjzOBm8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
