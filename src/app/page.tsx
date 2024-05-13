import Image from "next/image";
import ApplicationTable from "@/components/ApplicationTable";
import InputDrawer from "@/components/InputDrawer";
import {columns, sampleData} from "@/components/ApplicationTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="max-w-full px-4 mx-auto py-10">
        <InputDrawer />
        <ApplicationTable  columns={columns} data={sampleData} />
      </div>
    </main>
  );
}
