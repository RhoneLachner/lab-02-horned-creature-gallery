

import React,  { Component }  from 'react';
import './App.css';
import ImageList from './ImageList';
import Header from './Header.js';
import Footer from './Footer.js';
//import MainBody from './MainBody';

export default class App extends React.Component {
  render() {
  return (
    <>


<Header />
<ImageList />
<Footer />

</>
  );
}
}


