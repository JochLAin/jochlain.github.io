import React, { useEffect } from 'react';
import Portfolio from "../packages/portfolio";
import useMain from "@assets/hooks/useMain";

export default function Index() {
    const main = useMain();

    useEffect(() => {
        main.initialize('en');
    }, [main]);

    return <Portfolio />;
}
