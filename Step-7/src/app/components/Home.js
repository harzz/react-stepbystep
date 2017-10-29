import React from 'react';
export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            myAge: props.age,
            homeLink: 'Changed Link'
        }
    }

    myFunction(){
        this.setState({
            myAge:this.state.myAge+3
        });
    }

    onChangeName(){
        this.props.changeLink(this.state.homeLink);
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
                <hr/>
                <button onClick={this.onChangeName.bind(this)} className="btn btn-primary">
                    Change Header
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