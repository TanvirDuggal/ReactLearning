import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Class Clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click class Me</button>                
            </div>
        )
    }
}

export default ClassClick
