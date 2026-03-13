import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-4 text-center">
      <p className="text-xs">
        © 2026 Desenvolvido por Filipe Alves
      </p>

      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/filipeasj/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Filipe Alves no linkedin">
          <FaLinkedin/>
        </a>

        <a href="https://www.instagram.com/filipeasj/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Filipe Alves no instagram">
          <FaInstagram/>
        </a>

        <a href="https://github.com/filipeasj" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Filipe Alves no GitHub">
          <FaGithub/>
        </a>
      </div>
    </footer>
  );
}