import Image from "next/image";
import ApplicationTable from "@/components/ApplicationTable";
import {columns, sampleData} from "@/components/ApplicationTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="max-w-full px-4 mx-auto py-10">
        <ApplicationTable  columns={columns} data={sampleData} />
      </div>
    </main>
  );
}
