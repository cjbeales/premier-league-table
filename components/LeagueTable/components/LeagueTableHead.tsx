import { LeagueTableHeadProps } from "../LeagueTable.type";

export const LeagueTableHead = ({
  headerItems,
  theadClassNames = "bg-gray-100 text-xs uppercase text-gray-600",
  thClassNames = "px-4 py-3",
}: LeagueTableHeadProps) => {
  return (
    <thead className={theadClassNames}>
      <tr>
        {headerItems.map((header) => (
          <th key={header} className={thClassNames}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
