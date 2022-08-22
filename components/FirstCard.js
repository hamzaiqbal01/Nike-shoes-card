import React from "react";
import firstcardCss from "./firstCard.css";

export default function FirstCard(props) {
  return (
    <>
      <div className="card  mx-2 mx-auto">
        <div className="cardImg ">
          <img src={props.image} alt="" className="" />
          <div className="cardTitle">
            Running <span className="shoesHeading">Shoes</span>
          </div>
        </div>

        <div className="cardContent">
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit
          </p>
          <div className="btnSection mb-3">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
