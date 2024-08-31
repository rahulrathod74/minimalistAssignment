import React, { useState, useEffect } from "react";
import banner4 from "../assets/banner1.jpg";
import pop1 from "../assets/pop1.png";
import pop2 from "../assets/pop2.png";
import vect from "../assets/vect.png"
import st from "../assets/startlight.png"
import "../assets/popup.css";
const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup when the component is mounted
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-8 rounded-lg w-[60%] h-[80%]">
            {/* Cross Icon */}
            <button
              onClick={handleClose}
              className="absolute top-1 right-2 text-gray-500 hover:text-gray-700 "
            >
              &times;
            </button>
            <div className="pop-main">
              <div>
                <div className="pop-up-img-div">
                  <img src={banner4} alt="" />
                </div>
                <div className="sub-img-div">
                  <div className="img-div">
                    <img src={pop1} alt="" />
                  </div>
                  <div className="img-div">
                    <img src={pop2} alt="" />
                  </div>
                  <div className="img-div">
                    <img src={pop1} alt="" />
                  </div>
                  <div className="img-div">
                    <img src={pop2} alt="" />
                  </div>
                </div>
              </div>
              <div className="headpin">
                <h1>Raju Rassibomb</h1>
                <p>MRP:</p>
                <h2>Raju’s Dreams/-</h2>
                <img src={vect} alt="" />

                <div className="headpin-2 ">
                <h2>Product Description:</h2>
                <p>This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.</p>
                <img src={vect} alt="" />
                </div>
                <div className="headpin-3 ">
                <h2>Product Contents:</h2>
                
               <div class="flex"><img src={st} alt="" /><p>10 hand-hurting pieces of rassi bombs</p></div>
               <div class="flex"><img src={st} alt="" /><p>Jilled with great pain</p></div>
               <div class="flex"><img src={st} alt="" /><p>Raju’s hopes</p></div>
                <img src={vect} alt="" />
                </div>
                <div className="headpin-4 ">
                    <h2>Shipping Time: </h2>
                    <p>Before Raju understands that his dreams do not matter. </p>
                </div> 

                <button className="choose">Choose Now</button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
