import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Main extends React.Component{
    render(){
        let user = {
            name: "India",
            hobbies: ["Cricket","badminton","Carroms"]
        };
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homeLink="Home"/>
                </div>    
            </div> 
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Harsha"} age={26}/>
                </div>    
            </div> 
        </div>
        );
    }
}
render(<Main/>,document.getElementById("container"));