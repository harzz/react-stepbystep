import React from "react";
import { render } from "react-dom";

class Main extends React.Component{
    render(){
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <h1>Hello Harsha</h1>  
                </div>    
            </div> 
        </div>
        );
    }
}
render(<Main/>,document.getElementById("container"));