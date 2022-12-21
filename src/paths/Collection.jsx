import React from "react";
import { collections } from "../data/collections";

function Collection() {
  return (
    <div className="mt-16">
      {/* Return data of the collection which was clicked */}

      <h3 className="text-4xl text-center mb-8 font-bold">{collections[0].title}</h3>
      <div className="flex justify-evenly w-2/3 mx-auto gap-6">
        {collections[0].products.map((product, i) => {
          return (
            <div key={i}>
              <img
                src={product.productPreviewImage}
                alt="product preview image"
                className="w-72"
              />
              <h3 className="font-bold">{product.productName}</h3>
              <p className="font-bold">${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
