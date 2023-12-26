import React from "react";
import Snowfall from "react-snowfall";
import Home from "./Home";

export default function PageRoutes() {
  return (
    <div>
      <div
        style={{
          height: "100vh", // 100% of the viewport height
          width: "100vw", // 100% of the viewport width
          background: "#000000",
          position: "relative",
        }}
      >
        <Snowfall />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            display: "flex",
            color: "#fff",
          }}
        >
          <Home />
        </div>
      </div>
    </div>
  );
}
