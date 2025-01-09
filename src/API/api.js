const base_url = "http://localhost:5050/videos"

export async function createVideo(url, title, category_id) {
  const response = await fetch(base_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      title,
      category_id
    }),
  });

  if (!response.ok) {
    throw new Error("Não foi possível criar o vídeo");
  }

  const data = await response.json();

  return data;
}

export async function deleteVideo(id) {
  const response = await fetch(`${base_url}/${id}`, {
    method: "DELETE",
  });

  alert("Vídeo deletado com sucesso")

  if (!response.ok) {
    throw new Error("Não foi possível deletar o vídeo");
  }
}