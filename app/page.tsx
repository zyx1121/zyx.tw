import { FlutedGlass } from '@paper-design/shaders-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh w-dvw">
      <span className="inline-block dark:filter-[brightness(0)_invert(1)]">
        <FlutedGlass
          width="90dvw"
          height="90dvh"
          image="/zyx.svg"
          colorBack="#00000000"
          colorShadow="#000000"
          colorHighlight="#ffffff"
          size={0.5}
          shadows={0.25}
          highlights={0.1}
          shape="lines"
          angle={0}
          distortionShape="prism"
          distortion={0.5}
          shift={0}
          stretch={0}
          blur={0}
          edges={0.25}
          margin={0.1}
          grainMixer={0}
          grainOverlay={0}
          fit="cover"
        />
      </span>
    </main>
  );
}
