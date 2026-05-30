import { LeagueTableHeadProps } from "../LeagueTable.type";
import classNames from "classnames";

export const LeagueTableHead = ({
  headerItems,
  theadClassNames = "text-center text-base text-primary",
  thClassNames = "sticky top-0 z-10 bg-blue text-white p-4 min-w-fit max-w-fit",
}: LeagueTableHeadProps) => {
  return (
    <thead className={theadClassNames}>
      <tr>
        {headerItems.map((header) => (
          <th key={header} className={classNames(thClassNames, {
            'sticky left-0 w-24 z-30': header === 'Position',
            'sticky left-24 z-30 text-left': header === 'Club',
            'text-left': header === 'Last 5',
          })}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
