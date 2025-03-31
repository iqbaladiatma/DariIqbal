import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "../components/Envelope";
import IslamicOrnaments from "../components/IslamicOrnaments";
import IslamicPattern3D from "../components/IslamicPattern3D";
import {
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

const Index: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(true);

  // Mengecek preferensi sistem
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkMode.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    prefersDarkMode.addEventListener("change", handler);
    return () => prefersDarkMode.removeEventListener("change", handler);
  }, []);

  // Animasi perubahan tema
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {/* Modal Input Nama */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 text-center shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-700 mb-4">Masukkan Namamu bro!</h2>
            <input
              type="text"
              placeholder="Nama Anda..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border rounded p-2 w-full mb-4"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => setShowModal(false)}
            >
              Simpan
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Latar belakang dengan transisi */}
      <motion.div
        key={isDarkMode ? "dark" : "light"}
        className={`min-h-screen flex flex-col items-center justify-center relative py-12 px-4 overflow-hidden
          ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
              : "bg-gradient-to-br from-green-50 to-blue-50 text-gray-900"
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Tombol Toggle Mode */}
        <motion.button
          onClick={toggleDarkMode}
          className={`fixed top-4 right-4 z-50 p-2 rounded-full shadow-lg transition-all duration-300
            ${isDarkMode ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-gray-800 text-white hover:bg-gray-700"}`}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </motion.button>

        {/* Background ornaments */}
        <IslamicOrnaments />

        {/* 3D Islamic Pattern */}
        <IslamicPattern3D />

        {/* Header */}
        {isLoaded && (
          <motion.div
            className={`text-center mb-8 relative z-20 ${isDarkMode ? "text-white" : "text-green-700"}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            <motion.h1 className={`text-2xl md:text-4xl font-bold ${isDarkMode ? "text-white" : "text-green-700"}`}>
              {userName ? `Hai, ${userName}! Buka Untuk Melihat Isi` : "Buka Untuk Melihat Isi"}
            </motion.h1>
          </motion.div>
        )}

        {/* Main Envelope */}
        <div className="w-full max-w-lg relative z-20">
          <Envelope userName={userName}/>
        </div>

        {/* Footer message */}
        {isLoaded && (
          <motion.div
            className={`mt-8 text-center max-w-md mx-auto relative z-30
                ${isDarkMode ? "text-gray-300" : "text-yellow-600"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }}
          >
            <p className={`text-sm md:text-base mt-4 font-semibold ${isDarkMode ? "text-gray-400" : "text-yellow-600"}`}>
              From Iqbal M. Adiatma - Crypto and Computer Programmer
            </p>
          </motion.div>
        )}

        {/* Social Media Icons */}
        <motion.div
          className="mt-4 flex flex-wrap justify-center gap-2 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }}
        >
          {[
            { icon: FaTwitter, link: "https://twitter.com/iqbal200097" },
            { icon: FaInstagram, link: "https://instagram.com/iq_html" },
            { icon: FaWhatsapp, link: "https://wa.me/62895403003558" },
            { icon: FaLinkedin, link: "https://linkedin.com/in/iqbaladiatma" },
            { icon: FaYoutube, link: "https://youtube.com/@iqbal-20" },
            { icon: FaEnvelope, link: "mailto:iqbalmuhammadadiatma@gmail.com" },
            { icon: FaTiktok, link: "https://tiktok.com/@qubel12" },
            { icon: FaGithub, link: "https://github.com/iqbaladiatma" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-green-500 transition-transform transform hover:scale-125"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
