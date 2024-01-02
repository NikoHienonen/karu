import { BsAt } from "react-icons/bs";

export const Contact = () => {
  return (
    <div className="bg-rockTexture w-screen h-screen bg-cover text-white flex justify-center items-center flex-col uppercase tracking-widest text-center gap-5">
      <h2 className="text-3xl">Contact</h2>
      <p>Contact us by sending us mail to the address below</p>
      <div className="flex items-center">
        <BsAt className="text-xl mr-2" />
        <div className="tracking-widest">karubandofficial@gmail.com</div>
      </div>
    </div>
  );
};
