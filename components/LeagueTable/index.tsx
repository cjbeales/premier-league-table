import { LeagueTableHead } from "./components/LeagueTableHead";
import { LeagueTableBody } from "./components/LeagueTableBody";
import { LEAGUE_TABLE_HEADERS, TEAMS } from "./LeagueTable.data";

export const LeagueTable = () => {
    return (
        <div className="w-full rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
                <LeagueTableHead headerItems={LEAGUE_TABLE_HEADERS} />
                <LeagueTableBody data={TEAMS} />
            </table>
        </div>
    );
}