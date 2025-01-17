import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black bg-opacity-70 text-white py-6 space-y-4">
      {/* Links Section */}
      <div className="flex space-x-6">
        <a
          className="hover:text-gray-300 hover:scale-110 transition-transform duration-300"
          href="https://www.instagram.com/aman_jaykishan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="hover:text-gray-300 hover:scale-110 transition-transform duration-300"
          href="https://www.linkedin.com/in/aman-verma-202300272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-gray-300 hover:scale-110 transition-transform duration-300"
          href="https://www.facebook.com/profile.php?id=100017862300843"
          target="_blank"
          rel="noopener noreferrer"
        >
          FaceBook
        </a>
        <a
          className="hover:text-gray-300 hover:scale-110 transition-transform duration-300"
          href="https://github.com/aman-verma02"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-400">
        © 2025 Aman Jay Kishan Verma.
      </p>
    </div>
  );
};

export default Footer;
