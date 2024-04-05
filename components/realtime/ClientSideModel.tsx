"use client";

import { Icons } from "@/components/icons";
import { Database } from "@/types/supabase";
import { imageRow, modelRow, sampleRow } from "@/types/utils";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
export const revalidate = 0;

type ClientSideModelProps = {
  serverModel: modelRow;
  serverImages: imageRow[];
  samples: sampleRow[];
};

export default function ClientSideModel({
  serverModel,
  serverImages,
  samples,
}: ClientSideModelProps) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  const [model, setModel] = useState<modelRow>(serverModel);

  useEffect(() => {
    const channel = supabase
      .channel("realtime-model")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "models" },
        (payload: { new: modelRow }) => {
          setModel(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, model, setModel]);

  return (
    <div id="train-model-container" className="w-full h-full pt-10">
      <div className="flex flex-row w-full ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-10">
          {samples && (
            <div className="flex w-full">
              <div className="  ">
                <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <div className="absolute top-5 left-5">
                    <Badge
                      className="flex gap-2 items-center w-min"
                      variant={
                        model.status === "finished" ? "default" : "secondary"
                      }
                    >
                      {model.status === "processing"
                        ? "training"
                        : model.status}
                      {model.status === "processing" && (
                        <Icons.spinner className="h-4 w-4 animate-spin" />
                      )}
                    </Badge>
                  </div>
                  {/* <img
                    src={serverImages[0].uri}
                    alt="Model"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  /> */}
                </div>
                <h3 className="mt-2 font-medium text-2xl text-terceary">
                  {model.name}
                </h3>
              </div>
            </div>
          )}
          <div className=" ">
            {model.status === "finished" && (
              <div className="">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ">
                  {serverImages?.map((image) => (
                    <div key={image.id}>
                      <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl xl:aspect-h-8 xl:aspect-w-7">
                        <img
                          src={image.uri}
                          alt="Model"
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
