import React, { Component } from "react";
import {hydrate, render} from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";
import App from '../shared/App';

//console.log(process.env.calisma_turu)

if(process.env.calisma_turu == 'normal'){
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
}else{
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root'));
}







