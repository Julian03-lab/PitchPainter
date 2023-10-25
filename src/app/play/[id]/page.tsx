import GameplaySection from "@/components/game/GameplaySection";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-12 gap-6">
      <p className="absolute top-2 right-2 text-2xl font-bold">
        ID: {params.id}
      </p>
      <GameplaySection />
    </main>
  );
};

export default Page;
