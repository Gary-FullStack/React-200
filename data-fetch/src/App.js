import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?
        api_key=N9IWMw0x8qCTh7LU3mOSOStjPkLQOT3o&q=${query}&limit=24&rating=r`
        )
        .then((response) => {
          // handle success
          setGifs(response.data.data);
        })
        .catch((error) => {
          // handle error
          console.log("Error fetching and parsing data", error);
        });
    }, Math.ceil(Math.random() * 10000));
  }, [query]);

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs} />
      </div>
    </div>
  );
}

export default App;
