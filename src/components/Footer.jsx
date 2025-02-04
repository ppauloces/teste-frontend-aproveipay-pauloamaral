const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-4 text-center mt-8">
        <p className="text-sm">Desenvolvido por <span className="font-semibold">Paulo Amaral</span></p>
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href="https://www.linkedin.com/in/ppauloces/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ppauloces/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            GitHub
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  