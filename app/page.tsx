import GalaxyBackground from "./components/galaxy-background";
import Hero from "./components/hero";
import ZodiacOrbit from "./components/zodiac-orbit";
import ZodiacSelector from "./components/zodiac-selector";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GalaxyBackground />
      <ZodiacOrbit />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <Hero />
          <ZodiacSelector />
        </div>
      </div>
    </main>
  );
}
