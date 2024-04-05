import Login from "../login/page";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import InternalNav from "@/components/InternalNav";
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Login />;
  }

  return (
    <>
      {" "}
      <InternalNav />
      <div className=" w-full px-4 lg:px-40 bg-dark">
        {children}
      </div>
    </>
  );
}
