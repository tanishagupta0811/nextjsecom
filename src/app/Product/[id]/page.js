"use client";
import { useEffect } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, findSelectedProduct } from "@/app/lib/productSlice";
import Autoscroll from "@/app/components/Autoscroll";

export default function Product({ params }) {
  const dispatch = useDispatch();
  const { loading, products, error, selectedProduct } = useSelector(
    (state) => state.productSlice
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    if (!loading && !error && products.length > 0 && params.id) {
      dispatch(findSelectedProduct(Number(params.id)));
    }
  }, [loading, error, products, params.id, dispatch]);

  console.log("Selected Product:", selectedProduct);

  return (
    <div className="product">
      <div className="product-container mt-5">
        <div className="view">
          <div className="img-container">
            {selectedProduct?.images?.length > 0 ? (
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.title}
              />
            ) : (
              "Image Not Available"
            )}
          </div>
        </div>
        <div className="details">
          {selectedProduct ? (
            <div>
              <h1 className="text-3xl font-medium text-white">
                {selectedProduct.title}
              </h1>
              <div className="flex items-center  justify-around">
                <div className="w-2/5 border-transparent rounded-3xl bg-[#2563ea] text-center p-2 text-l font-bold mt-3 mb-2">
                  ${selectedProduct.price} USD
                </div>

                <p className="text-lg mt-2">
                  {selectedProduct.stock} units left
                </p>
              </div>

              <hr className="border-[#404040]" />
              <div className="text-medium font-bold mt-2">Dimensions</div>
              <div className="flex gap-5 mt-1 ">
                <div>W: {selectedProduct.dimensions?.width} cm</div>
                <div>H: {selectedProduct.dimensions?.height} cm</div>
                <div>D: {selectedProduct.dimensions?.depth} cm</div>
              </div>

              <div className="text-medium  font-semibold mt-2">Description</div>
              <p className="text-medium  mt-2">{selectedProduct.description}</p>
              <div className="sub-details">
                <div className="mt-2">
                  <div className="text-l font-semibold mt-2">Category</div>
                  <p className="text-medium mt-1">{selectedProduct.category}</p>
                </div>
                <div className="mt-2">
                  <div className="text-l font-semibold mt-2">Brand</div>
                  <p className="text-medium  mt-2">{selectedProduct.brand}</p>
                </div>
                <div className="mt-2">
                  <div className="text-l font-semibold mt-2">Warranty</div>
                  <p className="text-medium mt-2">
                    {selectedProduct.warrantyInformation}
                  </p>
                </div>
                <div className="mt-2">
                  <div className="text-l font-semibold mt-2">Shipping</div>
                  <p className="text-medium  mt-2">
                    {selectedProduct.shippingInformation}
                  </p>
                </div>
              </div>

              <div className=" flex items-center p-1 bg-[#2563ea] w-50 justify-center text-xl gap-2 rounded-3xl py-1 mt-2 font-bold">
                <div>+</div>
                <div> Add To cart</div>
              </div>
            </div>
          ) : loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            "No details available"
          )}
        </div>
      </div>
      <div className="mt-3 text-right w-[80vw] text-2xl font-bold">
        Rmended Products
      </div>
      <Autoscroll />
    </div>
  );
}
