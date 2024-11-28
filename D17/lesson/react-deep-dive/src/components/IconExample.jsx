import React from "react";
import { FaCoffee, FaBeer } from "react-icons/fa";

const IconExample = () => {
  return (
    <div style={{ textAlign: `center`, marginTop: `20px` }}>
      <h2>
        Need Coffee? <FaCoffee style={{ color: "brown", fontSize: "24px" }} />
      </h2>
      <h2>
        Need Coffee? <FaBeer style={{ color: "brown", fontSize: "24px" }} />
      </h2>
    </div>
  );
};

export default IconExample;
