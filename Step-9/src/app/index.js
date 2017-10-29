import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Main extends React.Component{

    constructor(){
        super();
        this.state={
            homeLink:"Home",
            homeMounted:true
        }
    }

    justGreet(){
        alert("Hello!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink:newName
        });
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted:!this.state.homeMounted
        });
    }

    render(){
        let homeCmp = "";
        if(this.state.homeMounted){
            homeCmp = (<Home name={"Harsha"} 
                            age={26} 
                            greet={this.justGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialHomeLink={this.state.homeLink}
                        />);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>    
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>    
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">
                        (un) mount Home Component
                    </button>
                    </div>    
                </div> 
            </div>
        );
    }
}
render(<Main/>,document.getElementById("container"));