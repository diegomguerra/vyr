import { createClient } from "@supabase/supabase-js";

// Lovable does not reliably inject Vite env vars into the client bundle.
// Use the project ref directly (URL + anon key are safe to ship in the frontend).
export const SUPABASE_URL = "https://uirbicdwikvgnuounlia.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpcmJpY2R3aWt2Z251b3VubGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMTk2NDAsImV4cCI6MjA4MTg5NTY0MH0.BfT2D31nTM7C2Zb5oQpG5kk5HlKracxauV9WGzRLIEg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

