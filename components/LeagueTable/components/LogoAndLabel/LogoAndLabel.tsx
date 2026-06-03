import Image from "next/image";
import { LogoAndLabelProps } from "../../LeagueTable.type";
import styles from "./logo-and-label.module.scss";

export const LogoAndLabel = ({
    logo,
    label,
}: LogoAndLabelProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image
                    src={logo}
                    alt={`${label} badge`}
                    width={36}
                    height={36}
                    className={styles.image}
                />
            </div>
            <span className={styles.label}>{label}</span>
        </div>
    );
};
