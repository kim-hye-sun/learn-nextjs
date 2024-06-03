import { API_URL } from "../app/contants";
import styles from "./move-info.module.css";
export async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          homepage &rarr;
        </a>
      </div>
    </div>
  );
}
