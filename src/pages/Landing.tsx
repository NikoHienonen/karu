import { ReactNode } from "react";

interface ReleaseContainerProps {
  children: ReactNode;
  bgName: string;
}

const ReleaseContainer = ({ children, bgName }: ReleaseContainerProps) => {
  return (
    <div
      className={`flex items-center justify-center w-screen h-screen bg-cover bg-center ${bgName} p-1 xl:p-5`}
    >
      <div className="flex flex-col text-center gap-8 text-white uppercase tracking-widest">
        {children}
      </div>
    </div>
  );
};

export const Landing = () => {
  return (
    <div>
      <ReleaseContainer bgName="bg-hydraCastle">
        <h1 className="font-extralight font-jost text-5xl xl:text-6xl">
          The Heads of the Hydra
        </h1>
        <a
          className="border-2 w-fit self-center p-5 rounded-lg bg-slate-800 bg-opacity-25 "
          href="https://www.youtube.com/watch?v=VpR9dtM8LzU"
          target="_blank"
        >
          Watch video
        </a>
        <p className="tracking-widest text-lg">
          They run, try to hide, no one will leave alive...
        </p>
      </ReleaseContainer>
      <ReleaseContainer bgName="bg-predator">
        <h1 className="font-extralight font-jost text-5xl xl:text-6xl">
          Predator
        </h1>
        <a
          className="border-2 w-fit self-center p-5 rounded-lg bg-slate-800 bg-opacity-25 "
          href="https://www.youtube.com/watch?v=VpR9dtM8LzU"
          target="_blank"
        >
          Watch video
        </a>
        <p className="tracking-widest text-lg">Yearning for the pain to stop</p>
      </ReleaseContainer>
      <ReleaseContainer bgName="bg-empire bg-top">
        <h1 className="font-extralight font-jost text-5xl xl:text-6xl">
          Empire of Dust
        </h1>
        <a
          className="border-2 w-fit self-center p-5 rounded-lg bg-slate-800 bg-opacity-25 "
          href="https://www.youtube.com/watch?v=Clqn0oesP7M"
          target="_blank"
        >
          Watch video
        </a>
        <p className="tracking-widest text-lg">
          Eye for and eye, life for a life / Bygone king smiles in his grave
        </p>
      </ReleaseContainer>
    </div>
  );
};
