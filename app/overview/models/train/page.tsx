import TrainModelZone from "@/components/TrainModelZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function Index() {
  return (
    <div className="w-full py-10">
      <div id="train-model-container" className="flex   flex-col lg:flex-row  justify-center  gap-5 px-2">
        <div>
        <Link href="/overview">
          <Button className=" text-lg py-5 px-5 hover:bg-red-500 text-terceary bg-primary rounded-full ">
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        </div>
        <Card className="bg-dark text-terceary ">
          <CardHeader>
            <CardTitle className="text-4xl font-medium text-terceary">Create new image</CardTitle>
       
          </CardHeader>
          <CardContent className="grid gap-6">
            <TrainModelZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
