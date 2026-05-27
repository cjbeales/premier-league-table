import { LeagueTableBodyProps } from "../LeagueTable.type";
import classNames from "classnames";
import { FormBadge } from "./FormBadge";
import Image from "next/image";

export const LeagueTableBody = ({
    data,
    tbodyClassNames = "border-t border-gray-200",
    trClassNames = "px-4 py-3 font-medium bg-primary/20",
    tdClassNames = "px-4 py-3 text-white",
    formDisplayType = "short",
}: LeagueTableBodyProps) => {



    return (
        <tbody className={tbodyClassNames}>
            {data.map((team) => (
                <tr key={team.club} className={trClassNames}>
                    <td className={classNames(tdClassNames, 'sticky left-0')}>{team.position}</td>
                    <td className={classNames(tdClassNames, 'sticky left-[100px] flex items-center gap-2')}>
                        <Image src={team.logo} alt={team.club} width={20} height={20} />
                        {team.club}
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
            ))}
        </tbody>
    );
};
