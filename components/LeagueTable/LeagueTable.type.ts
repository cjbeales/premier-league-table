export type LeagueTableHeadProps = {
  headerDisplayType: "full" | "short";
  headerItems: { full: string; short: string }[];
  theadClassNames?: string;
  thClassNames?: string;
};

export type FormDisplayType = "full" | "short";
export type FormResult = Team["last5"][number];

export type LeagueTableBodyProps = {
  data: Team[];
  tbodyClassNames?: string;
  trClassNames?: string;
  tdClassNames?: string;
  formDisplayType?: FormDisplayType;
};

export type Team = {
  position: number;
  movement: "up" | "down" | "neutral";
  club: string;
  logo: string;
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

export type LogoAndLabelProps = {
  logo: string;
  label: string;
}

export type FormBadge = {
  label: FormResult;
  formDisplayType?: FormDisplayType;
};
