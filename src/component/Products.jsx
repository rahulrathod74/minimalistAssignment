import React from "react";
import linebar from "../assets/linebar.png";
import banner2 from "../assets/banner1.jpg";
import line from "../assets/line.png"
import "../assets/Product.css"
const Products = () => {
  return (
    <>
      <div class=" flex justify-center gap-6 items-center">
        <img src={linebar} alt="" class="w-[35%] h-2" />
        <h3 className="heading-2">Our Products</h3>
        <img src={linebar} alt="" class="w-[35%] h-2 " />
      </div>
    <div className="main-card">
        <div className="card">
          <img src={banner2} alt=""  />
          <div  className="card-2">
            <p>Raju Rassibomb</p>
            <button className="btn-2">QUCIK VIEW</button>
          </div>
        </div>
        <div className="card">
        <img src={banner2}alt="" />
          <div className="card-2">
            <p>Ladiyon ki Rani Chani</p>
            <button className="btn-2">QUCIK VIEW</button>
          </div>
        </div>
      </div>
      <img src={line} alt=""  class="m-auto mt-12 w-[88%]"/>
    </>
  );
};

export default Products;
