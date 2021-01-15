import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*let dotsList = document.querySelector('.control-dots')
let dots = dotsList.children
let dotSelected
let isOneOfProductsSelected

setInterval(() => {

  dotSelected = document.querySelector('.dot.selected')
  isOneOfProductsSelected = []

  for (let i = 0; i < dots.length; i++) {

    if (dotSelected == dots.item(i)) {
      isOneOfProductsSelected[i] = true
    }
    else {
      isOneOfProductsSelected[i] = false
    }

  }

  if (
      isOneOfProductsSelected[6] || isOneOfProductsSelected[7] || isOneOfProductsSelected[8] || 
      isOneOfProductsSelected[9] || isOneOfProductsSelected[10] || isOneOfProductsSelected[11] ||
      isOneOfProductsSelected[12]
  ) 
  {
    dotsList.style.display = 'block'
  }
  else {
    dotsList.style.display = 'none'
  }

}, 1);*/