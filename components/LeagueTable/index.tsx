import { LeagueTableHead } from "./components/LeagueTableHead";
import { LeagueTableBody } from "./components/LeagueTableBody";
import { LEAGUE_TABLE_HEADERS, TEAMS } from "./LeagueTable.data";
import styles from "./league-table.module.scss";
export const LeagueTable = () => {
    return (
        <table className={styles.wrapper}>
            <LeagueTableHead headerDisplayType="full" headerItems={LEAGUE_TABLE_HEADERS} />
            <LeagueTableBody data={TEAMS} />
        </table>
    );
}

