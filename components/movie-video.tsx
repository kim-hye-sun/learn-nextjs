import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
  //throw new Error("Could not find video");
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideo(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
