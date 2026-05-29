import { LeagueTableBodyProps } from "../LeagueTable.type";
import classNames from "classnames";
import { FormBadge } from "./FormBadge";
import Image from "next/image";
import { LogoAndLabel } from "./LogoAndLabel";

export const LeagueTableBody = ({
    data,
    tbodyClassNames = "border-t border-gray-200",
    trClassNames = "px-4 py-3 text-base font-medium bg-purple overflow-x-auto",
    tdClassNames = classNames("p-3 text-white text-center bg-purple max-w-fit border-b border-gray-200"),
    formDisplayType = "short",
}: LeagueTableBodyProps) => {



    return (
        <tbody className={tbodyClassNames}>
            {data.map((team) => {

                const positionBackgroundClass = classNames({
                    "bg-green-500!": team.position <= 5,
                    "bg-red-500!": team.position >= 18,
                    "bg-purple": team.position > 5 && team.position < 18,
                });

                return (
                    <tr key={team.club} className={trClassNames}>
                        <td className={classNames(tdClassNames, positionBackgroundClass, 'sticky left-0')}>{team.position}</td>
                        <td className={classNames(tdClassNames, 'sticky left-24')}>
                            <LogoAndLabel logo={team.logo} label={team.club} />
                        </td>
                        <td className={tdClassNames}>{team.matchesPlayed}</td>
                        <td className={tdClassNames}>{team.wins}</td>
                        <td className={tdClassNames}>{team.draws}</td>
                        <td className={tdClassNames}>{team.losses}</td>
                        <td className={tdClassNames}>{team.goalsScored}</td>
                        <td className={tdClassNames}>{team.goalsAgainst}</td>
                        <td className={tdClassNames}>{team.goalDifference}</td>
                        <td className={tdClassNames}>{team.points}</td>
                        <td className={classNames(tdClassNames, "flex items-center gap-1")}>
                            {team.last5.map((result, index) => (
                                <FormBadge
                                    key={`${team.club}-${index}`}
                                    label={result}
                                    formDisplayType={formDisplayType}
                                />
                            ))}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    );
};
