import React, { useContext } from "react";
import { ThemeContext } from "./themeManager";


function ListItem() {
    const theme = useContext(ThemeContext);

    return (
        <li style={theme.theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
        </li>
    );
}

export default function Boxes() {
    return (
        <ul className="list">
            {new Array(10).fill(0).map((x, i) => (
                <ListItem key={i} />
            ))}
        </ul>
    );
}





