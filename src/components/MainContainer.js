import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredType, setFilteredType] = useState(null);

  useEffect(() => {
    // Fetch stock data from the API
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const handleBuyStock = (stock) => {
    // Add stock to portfolio
    setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    // Remove stock from portfolio
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  };

  const handleSort = (type) => {
    // Implement sorting logic
    // Update the state or fetch data accordingly
  };

  const handleFilter = (type) => {
    setFilteredType(type);
  };

  // Filter stocks based on the selected type
  const filteredStocks = filteredType
    ? stocks.filter((stock) => stock.type === filteredType)
    : stocks;

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
