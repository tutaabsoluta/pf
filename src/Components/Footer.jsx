import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importando el ícono de correo

export const Footer = () => {
  return (
    <footer id='contact' className="bg-slate-800 h-auto text-white tracking-tighter">
      <div className="md:flex justify-center items-center gap-48 px-12 py-8"> 
        <p className='text-4xl font-bold mb-8 md:mb-0'>Want to contact me?</p>
        <a href="mailto:538ser@gmail.com">
          <button className="flex items-center px-8 py-3 bg-green-700 hover:bg-green-500 duration-300 rounded-md uppercase font-bold"> 
            Send me an Email
            <FaEnvelope className="m-2" /> {/* Ícono de correo con margen a la derecha */}
          </button>
        </a>
      </div>

      {/* Línea divisoria */}
      <hr className="border-t border-gray-600" />

      {/* Copyright and Social */}
      <div className="flex justify-between items-center px-12 py-2">
        <div>
          <p className="text-sm">Copyright © 2024 - Sergio Duran</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sergio-dur%C3%A1n-018071260/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-green-500 duration-300" />
          </a>
          <a href="https://github.com/tutaabsoluta" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-green-500 duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};
