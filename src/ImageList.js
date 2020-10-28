import { Component } from 'react';
import Creatures from './App.js';
import ImageItem from './ImageItem';
import images from './data';
import './App.css'



import React from 'react';

export default class ImageList extends Component {
    state = {
        filterKeyword: '',
        horns: ''
    }

handleChange = e => {
    this.setState({
        filterKeyword: e.target.value
    })
}
    render() {
        return (
           <>
           <div>

            <select onChange={this.handleChange} className="dropdown">
            <option value=''>Show All</option>
            <option value='narwhal'>narwhal</option>
            <option value='rhino'>rhino</option>
            <option value='unicorn'>unicorn</option>
            <option value='unilego'>unilego</option>
            <option value='triceratops'>triceratops</option>
            <option value='markhor'>markhor</option>
            <option value='mouflon'>mouflon</option>
            <option value='addax'>addax</option>
            <option value='chameleon'>chameleon</option>
            <option value='lizard'>lizard</option>
            <option value='dragon'>dragon</option>
             </select>
       {/* THIS IS WHERE THE FILTER BEGINS */}
      {
            images.filter((item) => {
                if (!this.state.filterKeyword  ) return true;

                if (item.keyword === this.state.filterKeyword)
                return true;
                
                return false

            })

       .map(item => {
      return <ImageItem
       title={`(`+ item.title + `)`}  
       keywords={item.keyword}
       image={item.url} 
       description={`Image Description: ` + item.description}
       horns={`Number of horns: ` + item.horns}
       
       
       /> })


       
       }
       
       
     
    </div>
      
            </>
        )
    }
    
//     render() {
//         return (
    

        

//

// /> })

}



