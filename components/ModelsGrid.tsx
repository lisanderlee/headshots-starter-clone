import { useRouter } from "next/navigation";
import { modelRowWithSamples } from "@/types/utils";
import ModelCard from "./ModelCard";
type ModelsTableProps = {
  models: modelRowWithSamples[];
};

export default async function ModelsGrid({ models }: ModelsTableProps) {
  const router = useRouter();
  const handleRedirect = (id: number) => {
    router.push(`/overview/models/${id}`);
  };
 
  return (
    <div className="">
      <div className="  ">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {models?.map((model) => (
            <div
              key={model.modelId}
              onClick={() => handleRedirect(model.id)}
              className="group relative cursor-pointer"
            >
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
