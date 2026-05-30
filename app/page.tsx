import { LeagueTable } from "@/components/LeagueTable";
import Image
 from "next/image";
export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col gap-6 items-center z-10">
        <Image src="/pl-logo-dark.svg" alt="Premier League Table 2024/25" width={208} height={86} />
      <h1 className="text-2xl font-bold text-white">Premier League Table 2024/2025</h1>
        </div>
      <div className="absolute inset-0 bg-[url('/pl-bg-blue.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 p-8 md:p-10 w-full flex justify-center overflow-hidden">
        <main className="rounded-2xl flex flex-1 w-full max-h-[72vh] max-w-screen-xl overflow-x-auto flex-col items-center justify-between py-0 sm:items-start">
          <LeagueTable />
        </main>
      </div>
    </div>
  );
}