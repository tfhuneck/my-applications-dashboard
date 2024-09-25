import Image from "next/image";
import ApplicationTable from "@/components/ApplicationTable";
import { Posting } from "@/lib/types";
import InputDrawer from "@/components/InputDrawer";
import {columns} from "@/components/ApplicationTable";
import { getApplicationData } from "./api/fetch/appdata/route";

export default async function Home() {
  const data = await getApplicationData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="max-w-full px-4 mx-auto py-10">
        <InputDrawer />
        <ApplicationTable  columns={columns} data={data} />
      </div>
    </main>
  );
}
