import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="bg-slate-900 w-auto h-auto md:h-[600px]">
    <div className="pb-12">

      <Navbar />
    </div>
      <div className="md:flex justify-around items-center mt-16  px-12 md:px-0">
        <div className="text-white space-y-4 max-w-lg break-words">
            <h1 className="text-5xl font-bold tracking-tighter">Sergio Duran, Software Developer</h1>
            <p className="text-lg text-slate-300">I am a software developer with a strong focus on frontend technologies. I am passionate about writing clean, maintainable code and staying up-to-date with the latest trends in frontend development.</p>
        </div>

        <div className="pb-12 md:pb-0">
            <img src="../public/selfie.webp" alt="Selfie image" className="lg:w-[350px] lg:h-[350px] md:w-[220px] md:h-[220px] rounded-full mx-auto md:mx-0 mt-12 md:mt-0" />
        </div>
      </div>
    </header>
  );
};
