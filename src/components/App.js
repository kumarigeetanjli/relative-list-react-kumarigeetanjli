import React, { Component } from "react";
import './App.css';

class App extends Component {
    render() {

        return (

            <ol key={"relativeList"}>
                <li key={'relativeListItem1'}>Ramesh</li>
                < li key={'relativeListItem2'} >Dhami</li>
                < li key={'relativeListItem3'} >Kalki</li>
            </ol>

        )
    }
}


export default App;
