import React, { Component } from 'react'
import axios from 'axios'

class PostData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userID : '',
             title  : '',
             body   : ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    changePage = e => {
        console.log("change")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>User ID</label>
                    <input type="text" name="userID" onChange={this.changeHandler} value={this.state.userID}/>
                    <br/>
                    <label>TITLE</label>
                    <input type="text" name="title" onChange={this.changeHandler} value={this.state.title}/>
                    <br/>
                    <label>BODY</label>
                    <input type="text" name="body" onChange={this.changeHandler} value={this.state.body}/>
                    <br/>
                    <button type="submit"> SUBMIT </button>
                </form>
                <button onClick={this.changePage}> CHANGE PAGE </button>
            </div>
        )
    }
}

export default PostData
