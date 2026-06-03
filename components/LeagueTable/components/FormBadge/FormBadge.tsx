import classNames from "classnames"
import { FormBadge as FormBadgeType } from "../../LeagueTable.type"
import styles from "./form-badge.module.scss";

export const FormBadge = ({ label, formDisplayType = "short" }: FormBadgeType) => {

    const shortMap = {
        Win: "W",
        Loss: "L",
        Draw: "D",
    };

    return (
        <span
            className={classNames(styles.wrapper, {
                [styles.full]: formDisplayType === "full",
                [styles.win]: label === "Win",
                [styles.loss]: label === "Loss",
                [styles.draw]: label === "Draw",
            })}
        >
            {formDisplayType === "short"
                ? shortMap[label]
                : label}
        </span>
    )
}