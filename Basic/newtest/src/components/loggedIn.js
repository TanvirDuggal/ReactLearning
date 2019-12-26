import React, { Component } from 'react'

class loggedIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLogged:false,
            message:"Hello World"       
        }

        this.isLoggedCheck = this.isLoggedCheck.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
    }

    isLoggedCheck(){
        this.setState(prevState=>({
            isLogged:!prevState.isLogged
        }), this.changeMessage)
    }

    changeMessage(){
        if(this.state.isLogged){
            this.setState({
                message:"Hello World"
            })
        }else{
            this.setState({
                message:"Hello Logged In guest"
            })
        }
        
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={this.isLoggedCheck}>LOG IN</button>
            </div>
        )
    }
}

export default loggedIn
