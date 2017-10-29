import React from 'react';
export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            myAge: props.age
        }
    }

    myFunction(){
        this.setState({
            myAge:this.state.myAge+3
        });
    }

    render(){
        return(
            <div>
                <p>
                    Hello {this.props.name} and my age is {this.state.myAge}
                </p>
                <hr/>
                <button onClick={this.myFunction.bind(this)} className="btn btn-primary">
                    Click Me
                </button>
                <button onClick={this.props.greet} className="btn btn-primary">
                    Greet
                </button>
            </div>
        );
    }
}

Home.propTypes = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    greet: React.PropTypes.func
};