import React, { Component } from 'react'

class Dino extends Component {
    constructor() {
        super()
        this.state = {
            title: this.props.title,
            author: this.props.author,
            body: this.props.body,
            comments: this.props.comments,
            inputtedText: ''
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>by {this.author}</p>
                <p>{this.body}</p>
                <h2>Comments:</h2>
                <p>{this.comments[0]}</p>
            </div>
        )
    }
}

export default Dino