import React, { useState } from "react";
import KnifeContext from "../KnifeContext";
import data from "../data.json";

export default function KnifeProvider(props) {
  const [cart, setCart] = useState([]);
  return (
    <KnifeContext.Provider value={{ data, cart, setCart }}>
      {props.children}
    </KnifeContext.Provider>
  );
}
