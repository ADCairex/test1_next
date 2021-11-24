import React, { useState } from "react";

import dynamic from "next/dynamic";

const ComponentEL = dynamic(() => import('../../components/dinamic/eventListener'), {
    ssr: false,
});

const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

const getMousePosition = () => {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
};

export default function size() {

    return(
        <>
            <ComponentEL/>
        </>
    );
}