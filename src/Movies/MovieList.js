import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MovieCard from "../MovieCard/MovieCard";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const title = {
  textAlign: "center",
  color: "green",
};
const styleMovies = {
  margin: "5%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  justifyContent: "space-between",
};
const MovieList = ({ moviesData }) => {
  const classes = useStyles();
  const handleData = (name) => alert(name);
  return (
    <div>
      <h1 style={title}> This a list of Movies</h1>

      <div style={styleMovies} className="listing">
        {moviesData.map((el) => (
          <MovieCard el={el} handle={handleData} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
// default props
MovieList.defaultProps = {
  el: {
    id: "undefined",
    image:
      "https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    rating: "without rating",
    name: "Anonymous",
    date: "****",
    type: "this movie without type",
    description: "this movie without description",
    details: "this movie without details",
  },
};
