import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    //const [movie, vidoes] = await Promise.all([getMovie(id), getVideo(id)]);
    //단점 : 두 개가 모두 로드 될 때까지 빈페이지가 보여짐
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading Movie video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
