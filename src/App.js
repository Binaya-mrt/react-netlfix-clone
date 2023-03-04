import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./network/request";
import Row from "./components/Row";
function App() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      <Banner />
      <Row
        title="Neflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchAcionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
