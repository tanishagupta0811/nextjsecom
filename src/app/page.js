// "use client"
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchProducts } from "./lib/productSlice";
// import Autoscroll from "./components/Autoscroll";
// import Homeview from "./components/Homeview";
// import Carousel from "./components/Carousel";
// import Header from "./components/header";

// export default function Home() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchProducts());
// }, [dispatch]);
//   return (
//    <div className="main-page kanit-semibold p-2 ">
 
//  <Homeview/>
//  {/* <Autoscroll/> */}
//  <Carousel/>
//    </div>
//   );
// }
"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./lib/productSlice";
import Homeview from "./components/Homeview";
import Carousel from "./components/Carousel";

export default function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="main-page kanit-semibold p-2">
      <Homeview />
      <div className="flex justify-center items-center min-h-[60vh] w-full">
        <div className="max-w-5xl w-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
