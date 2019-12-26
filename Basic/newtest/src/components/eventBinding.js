import React, { Component } from 'react'

export class eventBinding extends Component {
    constructor(props){
        super(props);

        this.state={
            message:'Good Morning'
        }

        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage(){
        this.setState({
            message:'Good Evening'
        })
    }
    
    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={this.changeMessage}>Click</button>
            </div>
        )
    }
}

export default eventBinding