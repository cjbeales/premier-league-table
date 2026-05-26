export type LeagueTableHeadProps = {
  headerItems: string[];
  theadClassNames?: string;
  thClassNames?: string;
};

export type LeagueTableBodyProps = {
  data: Team[];
  tbodyClassNames?: string;
  trClassNames?: string;
  tdClassNames?: string;
};

export type Team = {
  position: number;
  club: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  last5: ("Win" | "Draw" | "Loss")[];
};
