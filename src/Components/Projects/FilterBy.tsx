import React from 'react';
import './css/FilterBy.css'

interface TechnologiesSelection {  
  setCSharp: (value: boolean) => void;
  setJs: (value: boolean) => void;
  setTs: (value: boolean) => void;
  setHTML: (value: boolean) => void;
  setCss: (value: boolean) => void;
  setJava: (value: boolean) => void;
  setUpdate: (value: boolean) => void;
  setInitialDate: (value: number) => void;
  setFinalDate: (value: number) => void;
  update: boolean;
}

const FilterBy: React.FC<TechnologiesSelection> = ({
  setCSharp,
  setJs,
  setTs,
  setHTML,
  setCss,
  setJava,
  setUpdate,
  update,
  setFinalDate,
  setInitialDate
  }) => {

  return (
    <article className='FilterBy'>
      <div className='FilterContainer'>
        <h4>Filter by</h4>
        <hr />
        <h4 className='BlueLabel'>Techonology</h4>
        <div className='TechnologiesContainer'>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" onChange={(e) => {setCSharp(e.target.checked); setUpdate(!update) }}/>
            <p>C#</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" onChange={(e) => {setJs(e.target.checked); setUpdate(!update) }}/>
            <p>JavaScript</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" onChange={(e) => {setTs(e.target.checked); setUpdate(!update) }}/>
            <p>TypeScript</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" onChange={(e) => {setJava(e.target.checked); setUpdate(!update) }}/>
            <p>Java</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" onChange={(e) => {setCss(e.target.checked); setUpdate(!update) }}/>
            <p>CSS</p>
          </label>
          <label htmlFor="Checkbox" className='CheckbocFilter'>
            <input type="checkbox" onChange={(e) => {setHTML(e.target.checked); setUpdate(!update) }}/>
            <p>HTML</p>
          </label>
        </div>
        <hr />
        <h4 className='BlueLabel'>Year</h4>
        <div className="price-filter">
        <input 
          type="number" 
          onChange={(e) => setInitialDate((Number)(e.target.value))} 
          placeholder="Min" id="minPrice" />
        <span>-</span>
        <input 
          type="number" 
          placeholder="Max" 
          onChange={(e) => setFinalDate((Number)(e.target.value))}
          id="maxPrice" />
        <button onClick={() => setUpdate(!update)}>Go</button>
      </div>
      </div>
    </article>
  );
};

export default FilterBy;