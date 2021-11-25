import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const ComponentEL = dynamic(() => import('../../components/dinamic/eventListener'), {
    ssr: false,
});

export default function size() {

    return(
        <>
            <ComponentEL/>
        </>
    );
}