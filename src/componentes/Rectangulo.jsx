import React from "react"

export const Rectangulo = ({
                               children,
                               classNames,
                               width = {width: 'auto'},
                               height = {height: 'auto'},
                               backgroundColor,
                               borderColor,
                               textColor,
                               padding = {padding: '0px'},
                           }) => {
    const divStyle = {
        className: classNames,
        width: width.width,
        height: height.height,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
        padding: padding.padding,
    }
    return <div style={divStyle}
                className={`rectangulo ${classNames} d-flex align-items-center justify-content-around`}
                >{children}</div>
}

