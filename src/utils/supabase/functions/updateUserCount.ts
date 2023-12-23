import { client } from "../client";

export async function updateUserCount(newUserCount: number, id: string) {
  const { data, error } = await client
    .from("games")
    .update({ users_count: newUserCount })
    .eq("id", id);

  if (error) {
    console.error("Error al unirse a la partida:", error.message);
  }
}
