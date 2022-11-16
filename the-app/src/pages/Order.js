import React from 'react'
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";


function Order() {
  return (
    <div>
      <Products heading="Choose your favorite" data={productData} />
      <Products heading="Delicious meals for you" data={productDataTwo} />
    </div>
  );
}

export default Order