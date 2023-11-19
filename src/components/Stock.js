import React from "react";

function Stock({ stock, onBuy }) {
  return (
    <div className="card" onClick={onBuy}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;
