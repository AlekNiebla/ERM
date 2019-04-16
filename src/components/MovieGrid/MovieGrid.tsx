import * as React from "react";
// components and interfaces
import MovieGridItem from "./components/MovieGridItem/MovieGridItem";
import Button from "Components/Button/Button";
// styles
import * as styles from "./MovieGrid.styles.css";
// interface
import { IMovie } from "Types";

type MoviesGridType = {
  similarResults?: boolean;
  movies?: IMovie[];
  sortingAction?: () => void;
};

const MovieGrid: React.SFC<MoviesGridType> = ({ movies, similarResults }) => {
  const movieCount: number = !!movies ? movies.length : 0;
  const movieList: React.ReactElement[] =
    movies && movies.map(movie => <MovieGridItem key={movie.id} {...movie} />);

  const countMessage: string = `${movieCount || "No"} movie${
    movieCount === 1 ? "" : "s"
  } found`;

  return (
    <div className={styles.main}>
      <div className={styles.results}>
        {similarResults ? (
          <>
            <span>Films by </span>
            <span>Drama genre</span>
          </>
        ) : (
          <>
            <span className={styles.count}>{countMessage}</span>
            <div className={styles.sorting}>
              <span className={styles.sortingLabel}>Sort by</span>
              <Button label="release date" size="small" variant="white" />
              <Button label="rating" size="small" variant="white" />
            </div>
          </>
        )}
      </div>
      {!!movies && !!movies.length ? (
        <div className={styles.grid}>{movieList}</div>
      ) : (
        <div className={styles.sorryMessage}>
          <span>No movies :(</span>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
