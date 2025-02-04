import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Alexandre PARENT. Tous droits réservés.
          </p>

          {/* Social and CV Links */}
          <div className="flex items-center space-x-4">
            {/* CV Download Button */}
            <Link 
              href="/files/CV_AlexandreParent.pdf" 
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 bg-[#b0003a] text-white rounded-lg text-sm font-medium group"
            >
              <FaDownload className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </Link>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/Alexandre-Parent" 
                target="_blank" 
                className="text-gray-400 hover:text-[#b0003a] transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href="https://www.linkedin.com/in/alexandre-parent-b79259175" 
                target="_blank" 
                className="text-gray-400 hover:text-[#b0003a] transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}