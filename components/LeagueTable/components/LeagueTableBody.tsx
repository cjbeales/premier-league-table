import { LeagueTableBodyProps } from "../LeagueTable.type";
import classNames from "classnames";
import { FormBadge } from "./FormBadge";
import { LogoAndLabel } from "./LogoAndLabel";
import { MovementIndicator } from "./MovementIndicator";

export const LeagueTableBody = ({
    data,
    tbodyClassNames = "border-t border-gray-200",
    trClassNames = "px-4 py-3 text-base bg-darkBlue overflow-x-auto",
    tdClassNames = classNames("p-3 text-white text-center bg-darkBlue border-b border-lightPurple"),
    formDisplayType = "short",
}: LeagueTableBodyProps) => {

    return (
        <tbody className={tbodyClassNames}>
            {data.map((team) => {

                const positionBorderClass = classNames('border-l-3', {
                    "border-l-championsLeague!": team.position <= 5,
                    "border-l-europaLeague!": team.position === 6 || team.position === 7,
                    "border-l-conferenceLeague!": team.position === 8,
                    "border-l-red-500!": team.position >= 18,
                    "border-l-darkBlue": team.position > 5 && team.position < 18,
                });

                return (
                    <tr key={team.club} className={trClassNames}>
                        <td className={classNames(tdClassNames, positionBorderClass, 'sticky left-0')}>
                            <div className="flex items-center justify-center gap-2">
                                {team.position}
                                <MovementIndicator movement={team.movement} />
                            </div>
                        </td>
                        <td className={classNames(tdClassNames, 'sticky left-24 w-[200px]')}>
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
                        <td className={classNames(tdClassNames, "w-[220px] min-h-[61px]")}>
                            <div className="flex items-center justify-center gap-1">
                                {team.last5.map((result, index) => (
                                    <FormBadge
                                        key={`${team.club}-${index}`}
                                        label={result}
                                        formDisplayType={formDisplayType}
                                    />
                                ))}
                            </div>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    );
};
