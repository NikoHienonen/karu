interface ReleaseContainerProps {
  title: string;
  bgName: string;
  lyricSample: string;
  href: string;
}

const ReleaseContainer = ({
  bgName,
  title,
  lyricSample,
  href,
}: ReleaseContainerProps) => {
  return (
    <div
      className={`flex items-center justify-center w-screen h-screen bg-cover bg-center ${bgName} p-1 xl:p-5`}
    >
      <div className="flex flex-col text-center gap-8 text-white uppercase tracking-widest">
        <h1 className="font-extralight font-jost text-5xl xl:text-6xl">
          {title}
        </h1>
        <a
          className="border-2 w-fit self-center p-5 rounded-lg bg-slate-800 bg-opacity-25 "
          href={href}
          target="_blank"
        >
          Watch video
        </a>
        <p className="tracking-widest text-lg">{lyricSample}</p>
      </div>
    </div>
  );
};

export const Landing = () => {
  return (
    <div>
      <ReleaseContainer
        bgName="bg-hydraCastle"
        title="The Heads of the Hydra"
        lyricSample="They run, try to hide, no one will leave alive..."
        href="https://www.youtube.com/watch?v=I7yfuWAsEyE"
      />
      <ReleaseContainer
        bgName="bg-predator"
        title="Predator"
        lyricSample="Yearning for the pain to stop"
        href="https://www.youtube.com/watch?v=VpR9dtM8LzU"
      />
      <ReleaseContainer
        bgName="bg-empire bg-top"
        title="Empire of Dust"
        lyricSample="Eye for an eye, life for a life / Bygone king smiles in his grave..."
        href="https://www.youtube.com/watch?v=Clqn0oesP7M"
      />
    </div>
  );
};
