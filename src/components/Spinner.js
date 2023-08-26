import React from "react";
import loading from "./reload.gif";

const Spinner = () => {
 
    const spinnerStyle = {
      width: "25px", // Set the width as needed
      height: "25px", // Set the height as needed
    };
    return (
      <div className="text-center">
        <img
          className="my-3"
          src={loading}
          alt="loading"
          style={spinnerStyle}
        />
      </div>
    );
}
export default Spinner;
