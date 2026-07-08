import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

export type Annotation = {
  id: string;
  page_path: string;
  x_pct: number;
  y_pct: number;
  target_text: string | null;
  comment: string;
  author_name: string | null;
  status: "open" | "resolved";
  created_at: string;
};
