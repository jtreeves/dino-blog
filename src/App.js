import './App.css'
// import Dino from './Dino'
import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            title: props.post.title,
            author: props.post.author,
            body: props.post.body,
            comments: props.post.comments,
            // inputText: ''
        }
    }

    newComment = () => {
        let newComments = [...this.state.comments, this.state.inputText]
        this.setState({ comments: newComments })
    }

    changeInput = (event) => {
        this.setState({ inputText: event.target.value })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>by {this.state.author}</p>
                <p>{this.state.body}</p>
                <h2>Comments:</h2>
                <p>{this.state.comments}</p>
                <input type='text' value={this.state.inputText} onChange={this.changeInput} />
                <button onClick={this.newComment}>Add Comment</button>
            </div>
        )
    }
}

export default App