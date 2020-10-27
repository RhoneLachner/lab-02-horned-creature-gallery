import React, { Component } from 'react';
import './App.css';

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.image}/>
                <h1>{this.props.title}</h1>
                <h1>{this.props.title}</h1>
                <h1>{this.props.title}</h1>
                <h1>{this.props.title}</h1>
                
            </div>
        )
    }
}
