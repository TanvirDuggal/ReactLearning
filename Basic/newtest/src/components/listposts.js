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
            this.setState({
                postData:response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        const {postData} = this.state
        return (
            <div>
                <h2>LIST OF PORTS</h2>
                {
                    postData.length ?
                    postData.map(postData => <div key={postData.id}> {postData.title} </div> ):
                    null
                }
            </div>
        )
    }
}

export default GetRequest