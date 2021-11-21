import React, { useEffect, useState } from 'react';
// Important disable SSR
import dynamic from 'next/dynamic'

const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectPage2'), {
    ssr: false,
});

export default function Page2() {    

    return (
       <ComponentUE/>
    )
}