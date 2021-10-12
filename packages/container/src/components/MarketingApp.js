import React, {useEffect, useRef} from 'react';
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom';

function MarketingApp() {
    const marketingRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(marketingRef.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                if(history.location.pathname !== nextPathname) {
                    history.push(nextPathname) 
                }
            }
        })

        history.listen(onParentNavigate)
    }, [])


    return <div ref={marketingRef} />;
}

export default MarketingApp;