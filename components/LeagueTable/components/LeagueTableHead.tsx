import { LeagueTableHeadProps } from "../LeagueTable.type";
import classNames from "classnames";

export const LeagueTableHead = ({
  headerDisplayType,
  headerItems,
  theadClassNames = "text-center sticky top-0 z-10 text-white",
  thClassNames = "bg-blue p-4 ",
}: LeagueTableHeadProps) => {
  return (
    <thead className={theadClassNames}>
      <tr>
        {headerItems.map((header) => (
          <th key={header.full} className={classNames(thClassNames, {
            'sticky left-0 w-24 z-30': header.full === 'Position',
            'sticky left-24 z-30 text-left': header.full === 'Club',
            'w-[220px]': header.full === 'Last 5',
          })}>
            {headerDisplayType === "full" ? header.full : header.short}
          </th>
        ))}
      </tr>
    </thead>
  );
};
