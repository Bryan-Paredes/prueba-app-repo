import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { createClient } from "@workspace/supabase/lib/server";
import { LogoutButton } from "./logout-button";
import { cookies } from "next/headers";

export async function AuthButton() {
  const supabase = await createClient(cookies);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
