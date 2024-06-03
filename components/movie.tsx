"use client";
import Link from "next/link";
import styles from "./movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function Movie({ id, title, poster_path }) {
  const router = useRouter();
  const onCliick = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onCliick} />
      <Link prefetch href={`/movie/${id}`}>
        {title}
      </Link>
    </div>
  );
}
