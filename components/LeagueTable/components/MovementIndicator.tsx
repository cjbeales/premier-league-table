import { ChevronDown, ChevronUp, Minus } from 'lucide-react';
import { Team } from '../LeagueTable.type';

export const MovementIndicator = ({ movement }: { movement: Team["movement"] }) => {

    switch (movement) {
        case "up":
            return <ChevronUp size={16} className="text-green-500" />;
        case "down":
            return <ChevronDown size={16} className="text-red-500" />;
        default:
            return <Minus size={16} className="text-gray-500" />;
    }
};