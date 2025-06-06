import React, { useState } from 'react';
import pizzaMenu, { filterByKeyword, filterByMaxPrice, filterVegetarian } from './Data';
import Cards from './Cards';

const Menu = () => {

  const [menu, setMenu] = useState(pizzaMenu);
  const [keyword, setKeyword] = useState('');

  const handleAll = () => {
    setMenu(pizzaMenu);
  }

  const handleMaxPrice = () => {
    setMenu(filterByMaxPrice(10));
  }

  const handleVegetarian = () => {
    setMenu(filterVegetarian());
  }

  const handleSearch = () => {
    setMenu(filterByKeyword(keyword));
  }

  return (
    <>
    
      <div className='d-flex justify-content-center gap-3 flex-wrap my-4'>
        
        <button className='btn btn-outline-primary' onClick={handleAll}>All</button>
        <button className='btn btn-outline-info' onClick={handleMaxPrice}>Under ₹10</button>
        <button className='btn btn-outline-success' onClick={handleVegetarian}>Vegetarian</button>
        
        <input
          type='text'
          placeholder='Search by keyword...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className='form-control w-auto'
        />

        <button className='btn btn-outline-warning' onClick={handleSearch}>Search</button>
      </div>

      <div className='d-flex flex-wrap justify-content-center gap-4 p-3'>
        {
          menu.length > 0 ? (
            menu.map((item) => (
            <Cards key={item.id} pizza={item} />
          ))
          ) : (
            <p className='text-center'>No pizza match your filter...</p>
          )
        }
      </div>

      {/* <div className='d-flex flex-wrap justify-content-center gap-4 p-3'>
        {
          menu.map((item) => (
            <Cards key={item.id} pizza={item} />
          ))
        }
      </div> */}
    </>
  );
};

export default Menu;
