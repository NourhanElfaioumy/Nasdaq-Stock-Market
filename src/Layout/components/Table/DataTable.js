import React, { useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

//Styles
import ModalDetails from "../Stock-Details/Modal";

export default function DataTable({ tickers, loading, posts }) {
  if (loading) {
    return (
      <CircleLoader
        className="d-flex justify-content-center "
        size={50}
        color="#0090ba"
      />
    );
  }
  const [showModal, setShowModal] = useState(false);
  const [tickerDetails, setTickerDetails] = useState([]);
  const [marketDetails, setMarketDetails] = useState([]);

  const getStockDetails = async (ticker) => {
    try {
      const url = `https://api.polygon.io/v3/reference/tickers/${ticker.ticker}?apiKey=${process.env.REACT_APP_API_KEY}`;
      const { data } = await axios.get(url);
      if (data) {
        setTickerDetails(data.results);
        let firstDetails = JSON.stringify(data.results);
        localStorage.setItem(`${ticker.ticker}Details`, firstDetails);
        console.log(data);
        console.log(data.results.list_date);
        const url2 = `https://api.polygon.io/v1/open-close/${ticker.ticker}/2020-10-01?adjusted=true&apiKey=${process.env.REACT_APP_API_KEY}`;
        const data2 = await axios.get(url2);
        if (data2) setMarketDetails(data2.data);
        let details2 = JSON.stringify(data2.data);
        localStorage.setItem(`${ticker.ticker}Details2`, details2);

        console.log(data2);
      }
    } catch (error) {
      console.log("error", error);
      // return [];
    }
    setShowModal(true);
  };

  const getDetails = (ticker) => {
    let storedDetails = localStorage.getItem(`${ticker.ticker}Details`);
    let storedDetails2 = localStorage.getItem(`${ticker.ticker}Details2`);

    if (storedDetails && storedDetails2) {
      let parsedDetails = JSON.parse(storedDetails);
      let parsedDetails2 = JSON.parse(storedDetails2);

      setTickerDetails(parsedDetails);
      setMarketDetails(parsedDetails2);
      setShowModal(true);
    } else {
      getStockDetails(ticker);
    }
  };
  return (
    <div id="data-table">
      <div className="container">
        <h3 className="title text-center mt-5" id="stocks-title">
          Stocks List
        </h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Ticker</th>
              <th className="text-center">Name</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {tickers.length != 0
              ? tickers.map((ticker, id) => (
                  <tr key={id}>
                    <td className="text-center">{ticker.ticker}</td>
                    <td className="text-center">{ticker.name}</td>
                    <td className="text-center">
                      <i
                        className="fas fa-info-circle"
                        onClick={() => setShowModal(true)}
                        onClick={() => getDetails(ticker)}
                      >
                        {" "}
                      </i>
                    </td>
                  </tr>
                ))
              : posts?.map((ticker, id) => (
                  <tr key={id}>
                    <td className="text-center">{ticker.ticker}</td>
                    <td className="text-center">{ticker.name}</td>
                    <td className="text-center">
                      <i
                        className="fas fa-info-circle"
                        onClick={() => setShowModal(true)}
                        onClick={() => getDetails(ticker)}
                      >
                        {" "}
                      </i>
                    </td>
                  </tr>
                ))}
          </tbody>

          <ModalDetails
            showModal={showModal}
            tickerDetails={tickerDetails}
            setTickerDetails={setTickerDetails}
            marketDetails={marketDetails}
            setShowModal={setShowModal}
          />
        </Table>
      </div>
    </div>
  );
}
