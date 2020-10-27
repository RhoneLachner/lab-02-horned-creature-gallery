import React, { Component } from 'react';
import './App.css';

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.keywords}</h1>
                <h4>{this.props.title}</h4>
                <img src={this.props.image}/>
                <p>{this.props.description}</p>
                <p>{this.props.horns}</p>
                
            </div>
        )
    }
}
