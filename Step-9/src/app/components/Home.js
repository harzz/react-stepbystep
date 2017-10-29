import React from 'react';
export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            myAge: props.age,
            homeLink: 'Changed Link'
        };
        console.log("constructor");
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps"+nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate"+nextProps);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate"+nextProps);
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate"+prevProps);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    myFunction(){
        this.setState({
            myAge:this.state.myAge+3
        });
    }

    onChangeName(){
        this.props.changeLink(this.state.homeLink);
    }

    handleChange(event){
        this.setState({
            homeLink:event.target.value
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
                <hr/>
                <input type="text" 
                    value={this.state.homeLink}
                    onChange={this.handleChange.bind(this,event)}
                    />
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