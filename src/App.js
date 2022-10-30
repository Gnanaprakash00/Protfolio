import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Modal/HomeSupportComponent/Home'
import Main from './Modal/HomeComponent/Main';
import Message from './Modal/HomeSupportComponent/Message';
import { createContext } from 'react';

export const Context = createContext();




function App() {
    const [count, setCount] = useState(100)
    return ( <
        Context.Provider value = {
            { count, setCount } } >
        <
        div className = "App" >
        <
        Main / >
        <
        /div> < /
        Context.Provider >
    );
}

export default App;