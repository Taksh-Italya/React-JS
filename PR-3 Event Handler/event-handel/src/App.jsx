import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 15 Pro", category: "iPhone", price: "₹1,44,900", image: "https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg" },
  { id: 2, name: "Apple Watch Series 9", category: "Watch", price: "₹41,999", image: "https://m.media-amazon.com/images/I/61T4-3BedZL.jpg" },
  { id: 3, name: "AirPods 2nd Generation", category: "AirPods", price: "₹12,900", image: "https://i.ebayimg.com/images/g/fBYAAOSwhtxj5r7Y/s-l1200.jpg" },
  { id: 4, name: "MacBook Air", category: "Mac", price: "₹99,900", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-skyblue-select-202503?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1739303844511" },
  { id: 5, name: "iMac", category: "Mac", price: "₹1,34,900", image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/allinone-desktop/o/1/5/-original-imaguw4jdguzakhb.jpeg?q=90&crop=false" },
  { id: 6, name: "AirPods 3rd Generation", category: "AirPods", price: "₹19,900", image: "https://inventstore.in/wp-content/uploads/2023/05/MME73.webp" },
  { id: 7, name: "Apple Watch Ultra 2", category: "Watch", price: "₹89,900", image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/smartwatch/u/f/b/-original-imagtcnufgp5ffxc.jpeg?q=90&crop=false" },
  { id: 8, name: "Apple Watch SE", category: "Watch", price: "₹29,900", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL53_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1725647080396" },
];

export default function ProductFilter() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div className="bg-beige min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Apple Store</h1>
      <div className="flex justify-center gap-4 mb-6">
       <center>
       {["All", "iPhone", "Watch", "AirPods", "Mac"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className="bg-blue-500  px-4 py-2 rounded-lg hover:bg-blue-700 transition ms-3 btn-dark"
          >
            {category}
          </button>
        ))}
       </center>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={product.image} alt={product.name} className="w-40 mx-auto mb-4"  style={{ width: "400px", height: "400px" }}  />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


