import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("models")
    .select(
      `name,
    images(
    uri
    )
  `
    )
    .eq("user_id", user?.id);

  const pictures = data || [];

  return NextResponse.json({ pictures });
}
