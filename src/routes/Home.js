import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sortby=rating"
    );

    console.log(movies);

  this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  renderMovie() {
    const {movies} = this.state;
    return movies.map((movie) => {
      console.log(movie);
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      );
    });
  }
  render() {
    const {isLoading} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">{this.renderMovie()}</div>
        )}
      </section>
    );
  }
}

export default Home;
