import { createClient } from "@supabase/supabase-js";

<<<<<<< HEAD
const supabaseUrl = "https://zkmfghujpmpggnzfkyvw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprbWZnaHVqcG1wZ2duemZreXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNDAzNjQsImV4cCI6MjA5MTgxNjM2NH0.NKB6AuzJat0GshkGyclWfSRjVvPQRomSr6HoVdMoExg";
=======
const supabaseUrl = "https://qaaqpizwpniprtdzredy.supabase.co";
const supabaseAnonKey = "sb_publishable_lDw94z7bp-hl105_UZib9Q_A8Wr0HKg";
>>>>>>> 59616f6 (feat: add routing for index, login, profile, and progress pages)

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
