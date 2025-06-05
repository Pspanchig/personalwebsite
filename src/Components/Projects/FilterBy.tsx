import React from 'react';
import './css/FilterBy.css'

const FilterBy: React.FC = () => {
  return (
    <article className='FilterBy'>
      <div className='FilterContainer'>
        <h4>Filter by</h4>
        <hr />
        <h4 className='BlueLabel'>Techonology</h4>
        <div className='TechnologiesContainer'>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" />
            <p>C#</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" />
            <p>JavaScript</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" />
            <p>TypeScript</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" />
            <p>Java</p>
          </label>
        </div>
        <hr />
        <h4 className='BlueLabel'>Year</h4>
        <div className="price-filter">
        <input type="number" placeholder="Min" id="minPrice" />
        <span>-</span>
        <input type="number" placeholder="Max" id="maxPrice" />
        <button>Go</button>
      </div>
      </div>
    </article>
  );
};

export default FilterBy;