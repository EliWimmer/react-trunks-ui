import React, {FC, ReactNode} from "react";
import './tag.css';

interface Props {
    color: "red" | "pink" | "purple" | "deeppurple" | "indigo" | "blue" | "lightblue" | "cyan" | "teal" | "green" | "lightgreen" | "lime" | "yellow" | "amber" | "orange" | "deeporange" | "brown" | "gray";
    type: "solid" | "faded" | "border";
    children: ReactNode;
}

export const Tag: FC<Props> = ({ color, type, children}) => {

    return (
        <span className={`trunks-tag ${type}-${color}`}>{children}</span>
    )
}