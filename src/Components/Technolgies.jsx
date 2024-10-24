import technologies from "../Data/data";
import { Card } from "./Card";

export const Technolgies = () => {
  return (
    <section id="techstack" className="tracking-tighter space-y-4 text-center mt-12 p-12">
      <h2 className="text-4xl font-bold">Technologies I Use</h2>
      <p className="text-lg text-gray-400">
        Here's some of the technologies I use in my projects
      </p>
      <div className="grid grid-cols-3 lg:flex">
        {technologies.map((technology) => (
          <Card
            key={technology.id}
            name={technology.name}
            photoUrl={technology.photoUrl}
          />
        ))}
      </div>
    </section>
  );
};
