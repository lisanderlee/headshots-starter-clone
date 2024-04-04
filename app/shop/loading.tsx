import { Icons } from "@/components/icons";
export const dynamic = "force-dynamic";
export default  function page() {
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center bg-dark">
    <Icons.spinner className="h-12 w-12 animate-spin text-white" />
    </div>

    </>
  );
}
