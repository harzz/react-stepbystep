import React from 'react';
export class Home extends React.Component{
    render(){
        return(
            <div>
                <p>
                    Hello {this.props.name}
                </p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    user:React.PropTypes.object
};