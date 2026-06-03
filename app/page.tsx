import { LeagueTable } from "@/components/LeagueTable";
import Image
  from "next/image";
import styles from "@styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <Image loading="eager" src="/pl-logo-dark.svg" alt="Premier League Table 2024/25" width={208} height={86} />
        <h1>Premier League Table 2024/2025</h1>
      </div>
      <div className={styles.tableWrapper}>
        <main className={styles.main}>
          <LeagueTable />
        </main>
      </div>
    </div>
  );
}