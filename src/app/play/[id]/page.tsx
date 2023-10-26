import GameplaySection from "@/components/game/GameplaySection";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Gameplay = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient({ cookies });

  const id = Math.floor(Math.random() * 30) + 1;
  const { data, error } = await supabase
    .from("words")
    .select("*")
    .eq("id", id)
    .single();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-12 gap-6">
      <GameplaySection selectedWord={data.word} roomId={params.id} />
    </main>
  );
};

export default Gameplay;
