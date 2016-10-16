import React from 'react';
import ReactDOM from 'react-dom';
import GetData from './modules/pageReact';

// hbs generate page

// Page event listeners
  // Body event listeners (click on page item, toggle form)

// Form
  // Form Submit
  // Regenerate page/sections?



$(document).ready(() => {
  let Global  = Global || {};
  // use  _this.function  if you want to reuse it across modules
  Global.mobile =  window.matchMedia( `( max-width: 720px)`).matches;

  ReactDOM.render(<GetData />, document.getElementById('container'));


});
