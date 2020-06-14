import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Chat } from './components';

const App = () => {

    return (
        <BrowserRouter>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,].map((_, index) => (
                <Link key={index} to={`/chat/${index}`}>
                    <button>
                        chat {index}
                    </button>
                </Link>
            ))}
            <Switch>
                <Route component={Chat} path="/chat/:chatId" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
