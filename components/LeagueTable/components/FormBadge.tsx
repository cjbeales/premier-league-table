import classNames from "classnames"
import { FormBadge as FormBadgeType } from "../LeagueTable.type"

export const FormBadge = ({ label, formDisplayType = "short" }: FormBadgeType) => {

    const shortMap = {
        Win: "W",
        Loss: "L",
        Draw: "D",
    };

    return (
        <span
            className={classNames(`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold`, {
                "w-10 h-10": formDisplayType === "full",
                "bg-green-500": label === "Win",
                "bg-red-400": label === "Loss",
                "bg-white text-primary": label === "Draw",
            })}
        >
            {formDisplayType === "short"
                ? shortMap[label]
                : label}
        </span>
    )
}