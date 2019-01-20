import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import store from './store';
import selectLocation from "./actions";
import reducer from "./reducer";

document.addEventListener("DOMContentLoaded", function(){
  window.selectLocation = selectLocation;
  // window.reducer = reducer;
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});
