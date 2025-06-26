import { createServerClient } from "@supabase/ssr";
import { type EmailOtpType } from "@supabase/supabase-js";

// Re-exportar tipos útiles de Supabase
export type { EmailOtpType } from "@supabase/supabase-js";

// Tipo para la función cookies de Next.js
type NextCookies = () => Promise<{
  getAll(): Array<{ name: string; value: string }>;
  set(name: string, value: string, options?: any): void;
}>;

export async function createClient(cookies: NextCookies) {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
