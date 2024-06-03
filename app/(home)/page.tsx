import Movie from "../../components/movie";
import styles from "./home.module.css";
import { API_URL } from "../contants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  /*
    원래의 데이터 통신 방식
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      ""
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  });
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
  */
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
