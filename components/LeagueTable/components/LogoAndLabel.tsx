import Image from "next/image";
import { LogoAndLabelProps } from "../LeagueTable.type";

export const LogoAndLabel = ({
    logo,
    label,
}: LogoAndLabelProps) => {
    return (
        <div className="flex items-center gap-2 w-fit">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <Image
                    src={logo}
                    alt={`${label} badge`}
                    width={36}
                    height={36}
                    className="h-8 w-8 object-contain"
                />
            </div>
            <span className="font-semibold">{label}</span>
        </div>
    );
};
