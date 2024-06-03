import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";
interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    //const [movie, vidoes] = await Promise.all([getMovie(id), getVideo(id)]);
    //단점 : 두 개가 모두 로드 될 때까지 빈페이지가 보여짐
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
