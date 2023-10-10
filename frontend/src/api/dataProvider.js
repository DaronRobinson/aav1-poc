import { supabaseDataProvider } from 'ra-supabase-core';
import { supabase } from './supabase';

export const dataProvider = supabaseDataProvider({
    instanceUrl: process.env.SUPABASE_URL,
    apiKey: process.env.SUPABASE_ANON_KEY,
    supabase
});