import { useEffect, useState } from "react";

const url = "http://localhost:5050/videos"

export async function videosList() {
  const response = await fetch(url);
  const data = await response.json();
  return data
}

export function useVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const data = await videosList();
      setVideos(data);
    }

    fetchVideos();
  }, []);

  return { videos };
}