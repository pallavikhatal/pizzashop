import React, { useState } from 'react';
import pizzaMenu from './Data';
import Cards from './Cards';

const Menu = () => {
  const [Menu] = useState(pizzaMenu);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 p-3'>
      {
        Menu.map((item, index) => (
          <Cards key={index} pizza={item} />  
        ))
      }
    </div>
  );
};

export default Menu;
