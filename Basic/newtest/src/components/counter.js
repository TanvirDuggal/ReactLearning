import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0 
        }
    }

    incrementCounter(){
        this.setState(prevState => ({
            counter:prevState.counter + 7 
        }))
    }
    
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2> {this.state.counter} </h2>
                <button onClick={()=>this.incrementCounter()}> Increment </button>                
            </div>
        )
    }
}

export default counter;