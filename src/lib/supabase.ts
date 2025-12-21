import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uirbicdwikvgnuounlia.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_M2KRrqX3YISg0-x2UFpBKQ_9s6f22IQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
