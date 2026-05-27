import { LeagueTableHead } from "./components/LeagueTableHead";
import { LeagueTableBody } from "./components/LeagueTableBody";
import { LEAGUE_TABLE_HEADERS, TEAMS } from "./LeagueTable.data";

export const LeagueTable = () => {
    return (
        <div className="w-full rounded-xl">
            <table className="w-full text-left text-sm overflow-x-auto border-separate border-spacing-y-2">
                <LeagueTableHead headerItems={LEAGUE_TABLE_HEADERS} />
                <LeagueTableBody data={TEAMS} />
            </table>
        </div>
    );
}