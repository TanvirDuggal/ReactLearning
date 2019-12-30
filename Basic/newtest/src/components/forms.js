import React, { Component } from 'react'

class Forms extends Component {

    constructor(props){
        super(props)

        this.state={
            userName:'',
            comment:'',
            select:'React'
        }
    }

    handleUserName = (event) =>{
        this.setState({
            userName:event.target.value
        })
    }

    handleComment = (event) =>{
        this.setState({
            comment:event.target.value
        })
    }

    handleSelect = (event) =>{
        this.setState({
            select:event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Forms</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>UserName</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserName}/>
                    <br/>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    <br/>
                    <select value={this.state.select} onChange={this.handleSelect}>
                        <option value='react'>React</option>
                        <option value='Angular'>Angular</option>
                    </select>
                    <input type="submit"/>
                </form>
                <h3>{this.state.userName}</h3>
                <br/>
                <h3>{this.state.comment}</h3>
                <br/>
                <h3>{this.state.select}</h3>
            </div>
        )
    }
}

export default Forms