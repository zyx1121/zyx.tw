import { Background } from "@/components/background";
import { Intruduction } from "@/components/intruduction";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Background />
      <div className="h-dvh w-dvw" />
      <Intruduction />
    </main >
  );
}
