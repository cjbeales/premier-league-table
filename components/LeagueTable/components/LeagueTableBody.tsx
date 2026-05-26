import { LeagueTableBodyProps } from "../LeagueTable.type";

export const LeagueTableBody = ({
  data,
  tbodyClassNames = "border-t border-gray-200",
  trClassNames = "px-4 py-3 font-medium",
  tdClassNames = "px-4 py-3",
}: LeagueTableBodyProps) => {
  return (
    <tbody className={tbodyClassNames}>
      {data.map((team) => (
        <tr key={team.club} className={trClassNames}>
          <td className={tdClassNames}>{team.position}</td>
          <td className={tdClassNames}>{team.club}</td>
          <td className={tdClassNames}>{team.matchesPlayed}</td>
          <td className={tdClassNames}>{team.wins}</td>
          <td className={tdClassNames}>{team.draws}</td>
          <td className={tdClassNames}>{team.losses}</td>
          <td className={tdClassNames}>{team.goalsScored}</td>
          <td className={tdClassNames}>{team.goalsAgainst}</td>
          <td className={tdClassNames}>{team.goalDifference}</td>
          <td className={tdClassNames}>{team.points}</td>
          {/* <td className={tdClassNames}>{team.last5.join(", ")}</td> */}
        </tr>
      ))}
    </tbody>
  );
};
