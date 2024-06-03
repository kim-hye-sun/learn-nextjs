import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
