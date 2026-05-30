import { LeagueTableBodyProps } from "../LeagueTable.type";
import classNames from "classnames";
import { FormBadge } from "./FormBadge";
import { LogoAndLabel } from "./LogoAndLabel";

export const LeagueTableBody = ({
    data,
    tbodyClassNames = "border-t border-gray-200",
    trClassNames = "px-4 py-3 text-base bg-darkBlue overflow-x-auto",
    tdClassNames = classNames("p-3 text-white text-center bg-darkBlue max-w-fit border-b border-lightPurple"),
    formDisplayType = "short",
}: LeagueTableBodyProps) => {



    return (
        <tbody className={tbodyClassNames}>
            {data.map((team) => {

                const positionBackgroundClass = classNames('border-l-2', {
                    "border-l-green-500!": team.position <= 5,
                    "border-l-amber-300!": team.position === 6 || team.position === 7,
                    "border-l-orange-400!": team.position === 8,
                    "border-l-red-500!": team.position >= 18,
                    "border-l-darkBlue": team.position > 5 && team.position < 18,
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
                        <td className={classNames(tdClassNames, "flex items-center gap-1 min-h-[61px]")}>
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
