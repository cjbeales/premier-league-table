import { LeagueTable } from "@/components/LeagueTable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden p-8 md:p-10">
      <div className="absolute inset-0 bg-[url('/pl-bg-blue.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex shrink-0 flex-col items-center gap-6">
        <Image src="/pl-logo-dark.svg" alt="Premier League Table 2024/25" width={208} height={86} />
        <h1 className="text-center text-2xl font-bold text-white">
          Premier League Table 2024/2025
        </h1>
      </div>

      <div className="relative z-10 mt-8 flex min-h-0 flex-1 flex-col">
        <main className="mx-auto w-full min-h-0 max-w-screen-xl flex-1">
          <LeagueTable />
        </main>
      </div>
    </div>
  );
}
