import ClientSideModelsList from "@/components/realtime/ClientSideModelsList";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const webhookUrl = `${process.env.VERCEL_URL}/leap/train-webhook`;
  const leapWebhookSecret = process.env.LEAP_WEBHOOK_SECRET;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>User not found</div>;
  }

  const { data: models } = await supabase
    .from("models")
    .select(
      `*, samples (
      *
    )`
    )
    .eq("user_id", user.id);
  const webhookUrlString = `${webhookUrl}?user_id=${user.id}&webhook_secret=${leapWebhookSecret}&model_type=man`;

  return (
    <>
      {webhookUrlString && <p>{webhookUrlString}</p>}
      <ClientSideModelsList serverModels={models ?? []} />
    </>
  );
}
