// import React, { useState, useEffect } from "react";
// import { getProducts } from "../../services/products";
// import CarouselCard from "../CarouselCard/CarouselCard";
// import "./Carousel.css";

// const Carousel = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [displayCurr, setDisplayCurr] = useState(true);
//   let [myIndex, setMyIndex] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       let products = await getProducts();
//       setAllProducts(products);
//     };
//     fetchProducts();
//   }, []);

//   /*Thoughts on what to do - possible fun pair coding exercise -
//   turn allProducts into array of arrays with max of 5 indexes each, 
//   (possibly use recursive call used in shared elements algo to make array of arrays)
//   use set interval to change index of array of arrays to display next index causing inner map to rerun and display items
//   set boundries to once interval kicks at end of outer array it goes back to first index
//    */
//   // const displayArr = ;

//   const carousel = () => {
//     for (let i = 0; i < allProducts.length / 5; i++) {
//       setDisplayCurr(false);
//       // x[i].style.display = "none";
//     }
//     setMyIndex(myIndex++);
//     if (myIndex > allProducts.length) {
//       myIndex = 1;
//     }
//     // allProducts[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 4000); // Change image every 4 seconds
//   };

//   const carouselJSX = allProducts.map((product, index) => {
//     if (index < 5) {
//       return (
//         <div>
//           <CarouselCard
//             _id={product._id}
//             name={product.name}
//             imgURL1={product.imgURL1}
//             key={index}
//           />
//         </div>
//       );
//     }
//   });

//   return (
//     <div
//       className="mySlide"
//       style={displayCurr ? { display: `flex` } : { display: "none" }}
//     >
//       {carouselJSX}
//     </div>
//   );
// };

// export default Carousel;
