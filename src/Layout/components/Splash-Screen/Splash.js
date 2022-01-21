import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Splash = () => {
  return (
    <div className="splash-screen">
      <div
        className="load-spinner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <img src="./logo.png" style={{ width: "50%" }} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <HashLoader size={50} color="#0090ba" />
      </div>
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        Dev: Nourhan Elfaioumy
      </div>
    </div>
  );
};
export default Splash;
