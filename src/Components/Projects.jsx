import items from "../Data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <main id="projects" className="bg-slate-900 text-white mt-16 py-20 text-center h-auto space-y-3">
      <h2 className="text-5xl font-bold tracking-tighter">Recent Projects</h2>
      <p>
        Here's some projects where I use some of the technologies mentioned
        before
      </p>

      <div className="py-12">
        {items.map((item) => (
          <div className="mx-8 md:mx-0 md:flex justify-center">
            <ProjectCard
              key={item.id}
              name={item.name}
              description={item.description}
              backgroundImage={item.backgroundImage}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
