import { LeagueTableHeadProps } from "../LeagueTable.type";
import classNames from "classnames";

export const LeagueTableHead = ({
  headerDisplayType,
  headerItems,
  theadClassNames = "text-center sticky top-0 z-20 text-white",
  thClassNames = "bg-blue p-4",
}: LeagueTableHeadProps) => {
  return (
    <thead className={theadClassNames}>
      <tr>
        {headerItems.map((header) => (
          <th key={header.full} className={classNames(thClassNames, {
            "sticky left-0 z-30 w-24 max-sm:w-[40px] max-sm:min-w-[40px] max-sm:max-w-[40px] max-sm:px-0": header.full === "Position",
            "sticky left-24 max-sm:left-[40px] z-30 w-[200px] min-w-[200px] max-sm:w-[120px] max-sm:min-w-[120px] text-left": header.full === "Club",
            "w-[220px]": header.full === "Last 5",
          })}>
            {headerDisplayType === "full" ? header.full : header.short}
          </th>
        ))}
      </tr>
    </thead>
  );
};
