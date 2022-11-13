import React from "react";

const Showcase = () => {
  return (
    <div>
      <div className="showcase-left">
        <h1>Invest by Watching Your Favorite Content</h1>
        <p>Experience the benefits of Web3</p>
        <input
          className="Input"
          type="text"
          id="firstName"
          defaultValue=""
          placeholder="Enter Email"
        />
      </div>
      <div className="showcase-right"></div>
    </div>
  );
};

export default Showcase;
