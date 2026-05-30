import { LeagueTableHead } from "./components/LeagueTableHead";
import { LeagueTableBody } from "./components/LeagueTableBody";
import { LEAGUE_TABLE_HEADERS, TEAMS } from "./LeagueTable.data";

export const LeagueTable = () => {
    return (
        <table className="min-w-[1600px] text-left text-sm overflow-x-auto border-separate border-spacing-0">
            <LeagueTableHead headerDisplayType="full" headerItems={LEAGUE_TABLE_HEADERS} />
            <LeagueTableBody data={TEAMS} />
        </table>
    );
}

