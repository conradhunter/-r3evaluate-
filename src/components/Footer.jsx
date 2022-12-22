import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex justify-between items-start">
        <div className="flex">
          <div>
            <h6 className="font-bold mb-5">*nav*</h6>
            <ul className="text-lg">
              <li>&lt;r3sp-v2&gt;</li>
              <li>&lt;r3yx-v2&gt;</li>
              <li>&lt;gift&gt;</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-5">*etc*</h6>
            <ul className="text-lg">
              <li>&lt;contact-us&gt;</li>
              <li>&lt;policy&gt;</li>
              <li>&lt;server/R3*&gt;</li>
            </ul>
          </div>
        </div>
        <div>
          <h6>...for additional information and access...</h6>
          <div className="flex w-1/3">
            <input type="text" placeholder="email-address..." />
            <button className="bg-white text-black">SUBMIT</button>
          </div>
        </div>
      </div>
      <div>
        <div>purchase method</div>
        <div>copyright & instagram icon/link</div>
      </div>
    </footer>
  );
}

export default Footer;
