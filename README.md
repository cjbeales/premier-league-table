# Premier League Table 2024/25

A responsive Premier League standings table for the 2024/25 season, built with Next.js and styled to match the official Premier League look and feel.

**[View live site →](https://cb-premier-league-table.netlify.app/)**

## Features

- Full league table with position, club badge, matches played, wins, draws, losses, goals, goal difference, and points
- **Last 5 form** — colour-coded W/D/L badges for each club’s recent results
- **Position movement** — up/down/neutral indicators beside each rank
- **Competition zones** — left border highlights for Champions League (top 5), Europa League (6–7), Conference League (8), and relegation (18–20)
- Sticky position and club columns for easier horizontal scrolling on smaller screens
- Premier League branding with background imagery and club logos

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Lucide React](https://lucide.dev) — movement icons

## Project structure

```
app/                    # Next.js app router (layout, page, global styles)
components/LeagueTable/ # Table UI and static season data
public/club-logos/      # Club badge images
public/                 # Premier League assets (logo, background)
```

Table data lives in `components/LeagueTable/LeagueTable.data.ts` and can be updated as the season progresses.

## Getting started

**Prerequisites:** Node.js 18+ and npm (or yarn, pnpm, bun).

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The page hot-reloads when you edit files.

### Other scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run build` | Production build        |
| `npm run start` | Serve production build  |
| `npm run lint`  | Run ESLint              |

## Deployment

The app is deployed on [Netlify](https://www.netlify.com/) at [https://cb-premier-league-table.netlify.app/](https://cb-premier-league-table.netlify.app/).

To deploy your own build, run `npm run build` and publish the output according to your host’s Next.js instructions.

## License

Private project — all rights reserved unless otherwise specified.
