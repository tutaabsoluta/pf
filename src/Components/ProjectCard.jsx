export const ProjectCard = ({ name, description, url, backgroundImage }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left tracking-tighter mb-4"> 
      <div className="space-y-4 max-w-xs"> 
        <h3 className="font-bold text-3xl">{name}</h3>
        <p className="break-words text-slate-300">{description}</p> 
        <a href={url} target="_blank" rel="noopener noreferrer"> 
          <button className="mt-8 px-8 py-2 rounded-md bg-green-700 hover:bg-green-500 duration-300 font-bold">
            Check Site
          </button>
        </a>
      </div>

      <div>
        <img
          src={backgroundImage}
          alt={name}
          className="w-72 h-56 rounded-xl"
        />
      </div>
    </div>
  );
};
