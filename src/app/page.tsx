'use client';

import { useEffect } from "react";
import { supabase } from "@/frontend/lib/supabaseClient";

export default function HomePage() {
  useEffect(() => {
    async function testSupabase() {
      // Test simple de connexion avec une requête basique
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("❌ Erreur Supabase:", error.message);
      } else {
        console.log("✅ Connexion Supabase OK:", "Session:", data.session);
        console.log("✅ Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
      }
    }
    testSupabase();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Bienvenue sur mon e-commerce</h1>
      <p className="mt-2">Regarde la console (F12) pour le test Supabase.</p>
    </main>
  );
}
