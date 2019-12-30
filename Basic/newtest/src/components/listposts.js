import React, { Component } from 'react'
import axios from 'axios'

class GetRequest extends Component {

    constructor(props){
        super(props)

        this.state={
            postData : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>LIST OF PORTS</div>
        )
    }
}

export default GetRequest