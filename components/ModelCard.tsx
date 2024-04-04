"use client";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Icons } from "./icons";
import Foto from "/public/images/result.png";
import Image from "next/image";
export default function ModelCard({ model }: any) {
  return (
    <>
     <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
     <div className="absolute top-5 left-5">
                  <Badge
                    className="flex gap-2 items-center w-min"
                    variant={
                      model.status === "finished" ? "default" : "secondary"
                    }
                  >
                    {model.status === "processing" ? "training" : model.status }
                    {model.status === "processing" && (
                      <Icons.spinner className="h-4 w-4 animate-spin" />
                    )}
                  </Badge>
                </div>
                <Image
                  src={Foto}
                  alt="Model"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-2 font-medium text-2xl text-terceary">Lisandro</h3>
            
    </>
  );
}
