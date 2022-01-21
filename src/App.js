import React, { useState, useEffect } from "react";

// components
import Navbar from "./Layout/components/Navbar";
import ListOfData from "./Layout/components/Explore/Stocks";
import Splash from "./Layout/components/Splash-Screen/Splash";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Splash />
      ) : (
        <div>
          <Navbar />
          <ListOfData />
        </div>
      )}
    </div>
  );
}
