import { useState } from "react";

export const Card = ({ name, photoUrl }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="container mx-auto flex flex-col items-center rounded-lg p-4 w-24 h-24 transition-transform transform hover:scale-105"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={ photoUrl }
        alt={ name }
        className="w-20 h-20 rounded-lg"
      />

      <p className={`mt-2 font-bold text-sm transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}>
        { name }
      </p>
    </div>
  );
};
