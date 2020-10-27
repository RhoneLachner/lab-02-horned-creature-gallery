import { Component } from 'react';
import Creatures from './App.js';
import ImageItem from './ImageItem';
import images from './data';



import React from 'react';

export default class ImageList extends Component {
    render() {
        return (
           <>
           <div>
      {
       images.map(item => {
      return <ImageItem
       title={item.title}  
       image={item.url} 
       
       /> })
       }

    </div>
      
            </>
        )
    }
}



