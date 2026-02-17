import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Intruduction } from "@/components/intruduction";
import { Map } from "@/components/map";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Background />
      <div className="h-dvh w-dvw" />
      <Intruduction />
      <Stack />
      <Map />
      <Contact />
    </main >
  );
}
