import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./Rating";

function App() {
    return (
        <div>
            <PageTitle title={"Hello, my friends"}/>
            <PageTitle title={"App components"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
