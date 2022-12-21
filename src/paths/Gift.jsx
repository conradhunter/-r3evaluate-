import React from "react";
import giftCard from "../assets/cardspin_1080x.gif";

function Gift() {
  return (
    <div className="mt-16">
      <div className="row">
        <div className="w-1/3">
          <img src={giftCard} alt="" />
          <h6>&lt;*r3-gift-card&gt;</h6>
          <h6>from $8.88</h6>
        </div>
      </div>
    </div>
  );
}

export default Gift;
