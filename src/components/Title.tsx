import { ImFire } from "react-icons/im";

interface TitleProps {
    children: React.ReactNode;
    compact?: boolean;
    bold?: boolean;
    size?: string;
}

export default function Title({children, compact, bold, size}: TitleProps){
    return (
        <h1 className={`flex items-center ${bold && "font-extrabold"} ${size ? size : "text-2xl" } text-green-pmg ${compact && "max-w-[350px]"}`}>
            {!compact && <ImFire className="me-2"/>}{children}
        </h1>
    )
}