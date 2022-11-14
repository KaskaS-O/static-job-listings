import { useState, useEffect } from "react";

import Header from "../Header/Header";
import OffersList from "../OffersList/OffersList";
import Footer from "../Footer/Footer";
import React from "react";
import FilterPanel from "../FilterPanel/FilterPanel";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

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

  const handleFilterClick = (e) => {
    const newFilter = e.target.innerText.toLowerCase();
    if (activeFilters.indexOf(newFilter) === -1) {
      setActiveFilters([...activeFilters, newFilter]);
    } else return;
  };

  const handleRemoveClick = (e) => {
    const removedFilter = e.target.parentElement.getAttribute("data-id");
    const newFilters = activeFilters.filter(
      (filter) => filter !== removedFilter
    );
    setActiveFilters(newFilters);
  };

  const handleClearClick = () => {
    setActiveFilters([]);
  };

  return (
    <div className="App">
      <Header />
      {activeFilters.length === 0 ? null : (
        <FilterPanel
          filters={activeFilters}
          handleRemove={handleRemoveClick}
          handleClear={handleClearClick}
        />
      )}
      <OffersList
        data={data}
        activeFilters={activeFilters}
        handleFilter={handleFilterClick}
      />
      <Footer />
    </div>
  );
}

export default App;
