import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./Rating";

function App() {
    return (
        <div>
            <PageTitle title={"Hello, my friends"}/>
            <Accordion title={"Accordidfon"}/>
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

function Accordion(props: any) {
    console.log("Accotdion rendering")
return <div>
    <AccordionTitle title={props.title} />
    <AccordionBody />
</div>
}

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    )
}function AccordionBody() {
    return (
      <h3>Menu</h3>           )
}





export default App;
