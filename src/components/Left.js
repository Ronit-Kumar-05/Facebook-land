import React from "react";
import logo from "../image/logo.svg";

const Left = () => {
  return (
    <>
      <div className="container mt-36 flex mx-auto">
      <div className="left">
        <img className="w-80" src={logo} alt="logo-facebook" />
        <p className="mx-8">
          Facebook helps you connect and share with the people in your life.
        </p>
        </div>
        </div>
    </>
  );
};

export default Left;
