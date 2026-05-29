import { LeagueTableHeadProps } from "../LeagueTable.type";
import classNames from "classnames";

export const LeagueTableHead = ({
  headerItems,
  theadClassNames = "bg-gray-100 text-center text-xs uppercase text-gray-600",
  thClassNames = "sticky top-0 z-10 bg-gray-100 px-0 min-w-fit max-w-fit py-3",
}: LeagueTableHeadProps) => {
  return (
    <thead className={theadClassNames}>
      <tr>
        {headerItems.map((header) => (
          <th key={header} className={classNames(thClassNames, {
            'sticky left-0 max-w-[100px] z-30': header === 'Position',
            'sticky left-[110px] z-30 text-left': header === 'Club',
            'text-left': header === 'Last 5',
          })}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
