import * as React from 'react';
import { Provider } from 'react-redux';
import store from "../store/store";
import HelloWorld from "./helloWorld";

export default class App extends React.Component
{
    render()
    {
        return (
            <Provider store={ store }>
                <HelloWorld />
            </Provider>
        );
    }
}