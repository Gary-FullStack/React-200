import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("funny");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=N9IWMw0x8qCTh7LU3mOSOStjPkLQOT3o&limit=24&rating=r`
      )
      .then((response) => {
        // handle success
        if (activeFetch) {
          setGifs(response.data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        // handle error
        console.log("Error fetching and parsing data", error);
      });
    return () => {
      activeFetch = false;
    };
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
        {loading ? <p>Loading...</p> : <GifList data={gifs} />}
      </div>
    </div>
  );
}

export default App;
