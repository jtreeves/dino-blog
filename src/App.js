import './App.css'
import React, { Component } from 'react'
import Dino from './Dino'

class App extends Component {
    render(props) {
        return (
            <div className="App">
                <Dino
                    title={this.props.post.title}
                    author={this.props.post.author}
                    body={this.props.post.body}
                    comments={this.props.post.comments}
                />
            </div>
        )
    }
}

export default App