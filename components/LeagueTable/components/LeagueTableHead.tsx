import { LeagueTableHeadProps } from "../LeagueTable.type";
import classNames from "classnames";

export const LeagueTableHead = ({
  headerDisplayType,
  headerItems,
  theadClassNames = "text-center text-white",
  thClassNames = "bg-blue p-4 sticky top-0 z-20",
}: LeagueTableHeadProps) => {
  return (
    <thead className={theadClassNames}>
      <tr>
        {headerItems.map((header) => (
          <th key={header.full} className={classNames(thClassNames, {
            "left-0 z-40 w-24 max-sm:w-12 max-sm:min-w-12 max-sm:max-w-12 max-sm:px-0": header.full === "Position",
            "left-24 max-sm:left-12 z-40 w-[200px] min-w-[200px] max-sm:w-[120px] max-sm:min-w-[120px] text-left": header.full === "Club",
            "w-[220px]": header.full === "Last 5",
          })}>
            {headerDisplayType === "full" ? header.full : header.short}
          </th>
        ))}
      </tr>
    </thead>
  );
};
