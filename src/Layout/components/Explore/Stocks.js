import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import StockSearch from "../styles/StockList";

// components
import DataTable from "../Table/DataTable";
import Pagination from "../Table/Pagination";

export default function ListOfData() {
  const [tickers, setTickers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=50&apiKey=${process.env.REACT_APP_API_KEY}`;
      setLoading(true);

      const res = await axios.get(url);
      setTickers(res.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  //Search function
  const Search = (rows) => {
    if (search) {
      return rows.filter((row) => row.name.toLowerCase().indexOf(search) > -1);
    } else {
      return [];
    }
  };
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tickers.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="data">
      <StockSearch>
        <input
          type="text"
          id="search-box"
          className="search-bar mt-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fas fa-search ml-2"></i>
      </StockSearch>

      <DataTable
        tickers={Search(tickers)}
        posts={currentPosts}
        loading={loading}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={tickers.length}
        paginate={paginate}
      />
    </div>
  );
}
