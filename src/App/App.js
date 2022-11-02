import { useState, useEffect } from "react";

import Header from "../Header/Header";
import OffersList from "../OffersList/OffersList";
import Footer from "../Footer/Footer";
import React from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <OffersList data={data} />
      <Footer />
    </div>
  );
}

export default App;
