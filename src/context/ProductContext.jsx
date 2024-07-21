import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProductData(response.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load the data :(");
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ productData, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
