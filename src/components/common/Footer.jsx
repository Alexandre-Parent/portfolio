export default function Footer() {
    return (
      <footer className="text-center text-gray-500 py-8 border-t mt-16">
        <p className="mb-2">
          © {new Date().getFullYear()} Alexandre PARENT. Tous droits réservés.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" className="text-gray-400 hover:text-blue-600">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }