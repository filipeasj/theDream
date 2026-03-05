export default function Footer() {
  return (
    <footer className="relative py-4 text-center">
      <p className="text-xs">
        © 2026 Desenvolvido por Filipe Alves
      </p>

      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/filipeasj/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/filipeasj/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://github.com/filipeasj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}