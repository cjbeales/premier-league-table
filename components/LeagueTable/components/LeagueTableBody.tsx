import { LeagueTableBodyProps } from "../LeagueTable.type";
import classNames from "classnames";

export const LeagueTableBody = ({
  data,
  tbodyClassNames = "border-t border-gray-200",
  trClassNames = "px-4 py-3 font-medium",
  tdClassNames = "px-4 py-3 text-primary",
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
          <td className={classNames(tdClassNames, "flex flex-col items-center gap-2")}>
            {team.last5.map((status) => (
              <span
                key={status}
                className={`px-2 py-1 rounded-full text-xs font-medium ${status === "Win" ? "bg-green-500 text-white" : status === "Draw" ? "bg-yellow-500 text-white" : "bg-red-500 text-white"}`}
              >
                {status}
              </span>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
