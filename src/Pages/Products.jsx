import React from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import "../Styles/Products.css";
import Card from '../Components/Card';

const Products = () => {
  return (
   <>
      <div className="filterSection">
         <div>
            <div className='fLeft'>
               <GiSettingsKnobs className='filterIcon'/>
               <p>Filter</p>
               <p className='resultCount'>Showing 1-16 of 50 results</p>
            </div>
            <div className="fRight">
               <select name="Default Sorting" id="sorting">
                  <option value="default">Default Sorting</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
               </select>
            </div>
         </div>
      </div>
      <div className="mainSection">
         <Card />
      </div> 
   </>
  )
}

export default Products