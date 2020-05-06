import React, { useEffect } from 'react';
import { useStateSocket } from '@hilma/socket.io-react';

const App = () => {
    const [number, , setNumberEmit] = useStateSocket('some-event', 0);

    useEffect(() => {
        setTimeout(() => {
            setNumberEmit(Math.random());
        }, 2000);
    }, []);

    return (
        <div>{number}</div>
    );
}

export default App;
