import { API_URL } from "../app/contants";
import styles from "./movie-video.module.css";

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
  //throw new Error("Could not find video");
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
