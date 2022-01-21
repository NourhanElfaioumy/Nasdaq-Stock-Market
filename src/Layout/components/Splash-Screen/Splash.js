import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Splash = () => {
  return (
    <div className="splash-screen">
      <div
        className="load-spinner d-flex justify-content-center align-items-center w-100 h-50"

        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   width: "100%",
        //   height: "80vh",
        // }}
      >
        <img src="./logo.png" className="w-50" alt="" />
      </div>

      <div className="d-flex justify-content-center align-items-center w-100">
        <HashLoader size={50} color="#0090ba" />
      </div>
      <div className="text-center fs-2">Dev: Nourhan Elfaioumy</div>
    </div>
  );
};
export default Splash;
