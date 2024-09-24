import React from "react";
import { styles } from "../../styles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Sesuaikan path jika Anda meletakkan file constants.js di tempat yang berbeda
import { userData } from "../../constants";

const Earth = () => {
  const { name, photo, email, socialMedia } = userData;

  return (
    <div className="flex justify-center items-center h-screen bg-black-100">
      <div className="bg-tertiary p-16 rounded-xl shadow-lg text-center w-[500px]">
        {/* Foto dengan bentuk lingkaran */}
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nama dan Email */}
        <h2 className="mt-4 text-xl font-semibold text-white-100">
          {name}
        </h2>
        <p className="text-gray-200">{email}</p>

        {/* Ikon Sosial Media */}
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={socialMedia.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 hover:text-pink-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Earth;
