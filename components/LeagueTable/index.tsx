"use client"
import { LeagueTableHead } from "./components/LeagueTableHead";
import { LeagueTableBody } from "./components/LeagueTableBody";
import { LEAGUE_TABLE_HEADERS, TEAMS } from "./LeagueTable.data";
import { useIsMobile } from "@hooks/useIsMobile";

export const LeagueTable = () => {
    const isMobile = useIsMobile();

    return (
        <div className="league-table-scroll h-[min(72vh,calc(100dvh-14rem))] w-full min-w-0 overflow-auto rounded-2xl">
            <table className="min-w-[1600px] text-left text-sm border-separate border-spacing-0">
                <LeagueTableHead headerDisplayType={isMobile ? "short" : "full"} headerItems={LEAGUE_TABLE_HEADERS} />
                <LeagueTableBody data={TEAMS} />
            </table>
        </div>
    );
}

