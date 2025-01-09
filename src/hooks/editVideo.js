const baseUrl = "http://localhost:5050/videos"


export async function getVideo(id) {

  const response = await fetch(`${baseUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!response.ok) {
    throw new Error("Não foi possível buscar o vídeo");
  }

  const data = await response.json();

  return data;
}

export async function editVideo({ id, url, title }) {

  const response = await fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      title
    }),
  });

  if (!response.ok) {
    throw new Error("Não foi possível editar o vídeo");
  }

  const data = await response.json();

  return data;
}

return { editVideo }