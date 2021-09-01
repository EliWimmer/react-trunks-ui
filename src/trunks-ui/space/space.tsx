import React, { ReactElement, ReactNode, FC } from 'react'
import './space.sass'
interface Props {
    children?: ReactNode;
    direction?: "vertical" | "horizontal"
    size?: "small" | "medium" | "large"
    inline?: boolean
    wrap?: boolean
    fill?: boolean
}

export const Space: FC<Props> = ({children, direction, size, inline, wrap, fill}) => {
    return (
        <div className={`trunks-space ${direction !== undefined ? direction : ''} ${size !== undefined ? size : 'default'} ${inline ? 'inline' : ''} ${wrap ? 'wrap' : ''} ${fill ? 'fill' : ''}`}>
            {children}
        </div>
    )
}


