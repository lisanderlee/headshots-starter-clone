import Login from "@/app/login/page";
import { Icons } from "@/components/icons";
import ClientSideModel from "@/components/realtime/ClientSideModel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Foto from "/public/images/result.png";
export const dynamic = "force-dynamic";

export default async function Index({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Login />;
  }

  const { data: model } = await supabase
    .from("models")
    .select("*")
    .eq("id", Number(params.id))
    .eq("user_id", user.id)
    .single();

  if (!model) {
    redirect("/overview");
  }

  const { data: images } = await supabase
    .from("images")
    .select("*")
    .eq("modelId", model.id);

  const { data: samples } = await supabase
    .from("samples")
    .select("*")
    .eq("modelId", model.id);

  return (
    <>
      <div id="train-model-container" className="w-full h-full py-10 lg:px-0 ">
        <div className="flex flex-row gap-4  justify-between items-center ">
          <Link href="/overview">
            <Button className="  text-sm lg:text-lg lg:py-5  px-3 py-2 lg:px-5 hover:bg-red-500 text-terceary bg-primary rounded-full ">
              <FaArrowLeft className="mr-2" />
              Go Back
            </Button>
          </Link>

          <Link href="/overview/models/train">
            <Button className="  text-lg lg:text-xl lg:py-7 lg:px-12 px-5 py-3 hover:bg-red-500 text-terceary bg-primary rounded-full ">
              New Creation
            </Button>
          </Link>
        </div>

        <ClientSideModel
          samples={samples ?? []}
          serverModel={model}
          serverImages={images ?? []}
        />
      </div>
    </>
  );
}
