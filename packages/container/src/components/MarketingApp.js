import { mount } from 'marketing/MarketingApp'
import React, {useEffect, useRef} from 'react';

function MarketingApp() {
    const marketingRef = useRef(null)

    useEffect(() => {
        mount(marketingRef.current)
    }, [])


    return <div ref={marketingRef} />;
}

export default MarketingApp;