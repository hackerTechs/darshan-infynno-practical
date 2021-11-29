import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import SideNav from "./components/SideNav";
import "materialize-css";
import { Preloader, Row } from "react-materialize";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  const getData = () => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ba4f3decbd81cc38175b3d6fbc4ac143&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res?.results && res?.results?.length) setData(res?.results);
        else setData(null);
        setLoading(false);
      })
      .catch((err) => console.log({ err }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <div className="loader">
        <Preloader active color="blue" flashing={false} size="big" />
      </div>}
      <SideNav />
      <div className="main">
        <Row>
          {data && data?.length
            ? data.map((movie) => (
                <MovieCard
                  title={movie?.title}
                  image={`${imageUrl}${movie?.backdrop_path}`}
                />
              ))
            : null}
        </Row>
      </div>
    </>
  );
}

export default App;
