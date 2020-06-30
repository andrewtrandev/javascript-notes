import React, { useState, useEffect } from "react";
import currencies from "./supported-currencies.json";
import axios from "axios";
const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("AUD");
  const [priceData, setPriceData] = useState({});

  useEffect(() => {
    const url =
      "https://api.coindesk.com/v1/bpi/historical/close.json?currency=";
    axios.get(`${url}${selectedCurrency}`).then((response) => {
      setPriceData(response.data.bpi);
      console.log(response.data.bpi);
    });
  }, [selectedCurrency]);

  return (
    <div>
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {currencies.map((currencyObj) => (
          <option value={currencyObj.currency} key={currencyObj.currency}>
            {currencyObj.country}
          </option>
        ))}
      </select>

      <h1>Bitcoin Data for {selectedCurrency}</h1>
      {Object.keys(priceData).map((date) => (
        <div key={date}>
          Date: {date} Value: {priceData[date]}
        </div>
      ))}
    </div>
  );
};

export default App;
