import React from "react";
import { Link } from "react-router-dom";
import { collections } from "../data/collections";

function Home() {
  return (
    <div className="my-16">
      {collections.map((collection, i) => {
        return (
          <section key={i} className="mb-10">
            <Link to={`/collections/${collection.id}`} className="">
              <h3 className="text-4xl text-center mb-8 font-bold">{collection.title}</h3>
            </Link>
            <div className="flex justify-evenly w-2/3 mx-auto gap-6">
              {collections[i].products.map((product, i) => {
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
          </section>
        );
      })}
    </div>
  );
}

export default Home;
