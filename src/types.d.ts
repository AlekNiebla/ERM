declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
export interface MovieListQuery {
  search: string;
  searchBy?: "title" | "genres";
  sortBy?: string;
  sortOrder?: "desc" | "asc";
  filter?: string[];
  offset?: number;
  limit?: number;
}

export interface ResponseMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number | null;
}

export interface ResponseMovieList {
  data: ResponseMovie[];
  total: number;
  offset: number;
  limit: number;
}
export interface IMovieGridItem {
  title: string;
  poster?: string;
  releaseDate?: string;
  genres?: string[];
}

export interface IMovie extends IMovieGridItem {
  id: number;
}

/**
 * ACTIONS
 */
export type ActionTypeMap = { [key: string]: string };

type Partial<T> = { [P in keyof T]?: T[P] };

// type payload<T> = {
//   payload: T;
// };
// interface PayloadAction extends payload<string | number> {
//   type: string;
// }

// interface GenericAction extends Partial<payload<usecases>> {
//   type: string;
// }

export interface GenericAction<T> {
  type: string;
  payload?: T;
}

export interface PayloadAction<T> extends GenericAction<T> {
  payload: T;
}

export interface ActionCreator<T> {
  (payload: T): GenericAction<T>;
}

export interface StoreDispatch<T> {
  (action: GenericAction<T> | ActionCreator<T>): void;
}

export type ThunkAction<T, D> = (
  payload: T
) => (dispatch: StoreDispatch<D>) => GenericAction<T>;

// to experiment:
// export interface ThunkDispatch<T> {
//   (dispatch: StoreDispatch<T>): GenericAction<T>;
// }

// export interface ThunkAction<T, D> extends ActionCreator<T> {
//   (payload: T): ThunkDispatch<D>;
// }
