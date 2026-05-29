import { LeagueTable } from "@/components/LeagueTable";

export default function Home() {
  return (

    <div className="relative flex flex-1 items-center justify-center">
      <div className=" absolute inset-0 bg-[url('/pl-table-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10">
        <main className="flex flex-1 w-full max-w-screen-xl overflow-x-auto flex-col items-center justify-between py-32 sm:items-start">
          <LeagueTable />
        </main>
      </div>
    </div>
  );
}