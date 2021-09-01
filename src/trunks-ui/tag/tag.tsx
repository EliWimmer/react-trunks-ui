import React, {FC, ReactNode} from "react";
import './tag.sass';

interface Props {
    color?: "red" | "pink" | "purple" | "deeppurple" | "indigo" | "blue" | "lightblue" | "cyan" | "teal" | "green" | "lightgreen" | "lime" | "yellow" | "amber" | "orange" | "deeporange" | "brown" | "default" | "white";
    type?: "solid" | "default" | "border" | "dashed";
    children: ReactNode;
}

export const Tag: FC<Props> = ({ color, type, children}) => {

    return (
        <span className={`trunks-tag ${type ? type : 'default'} ${color ? color : 'default'}`}>{children}</span>
    )
}