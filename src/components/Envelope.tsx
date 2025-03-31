import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [showTypingMessage, setShowTypingMessage] = useState(false);
  const [showReplyButton, setShowReplyButton] = useState(false);

  useEffect(() => {
    const name = window.prompt("Masukkan nama lengkap Anda:");
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleEnvelopeOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowTypingMessage(true);
    }, 3000); // Tahan teks utama lebih lama sebelum animasi typing
  };

  return (
    <div className="relative w-full max-w-md mx-auto text-center">
      {/* Amplop */}
      <div
        className="relative w-full max-w-md mx-auto cursor-pointer aspect-[3/2]"
        onClick={handleEnvelopeOpen}
      >
        <motion.div className="relative bg-gradient-to-br from-green-500 to-blue-500 rounded-xl shadow-xl w-full h-full">
          {/* Flap Amplop */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-600 to-green-400"
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Nama User di Atas Amplop */}
            {userName && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
                Dear {userName}
              </div>
            )}
          </motion.div>

          {/* Isi Amplop */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute inset-6 bg-white rounded-xl p-6 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  {!showTypingMessage ? (
                    // Menampilkan teks utama lebih lama sebelum animasi typing
                    <>
                      <motion.h2
                        className="font-bold text-green-600 mb-2 text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                      >
                        Selamat {userName}!
                      </motion.h2>
                      <motion.h1
                        className="font-bold text-yellow-500 mb-4 text-3xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
                      >
                        Hari Raya Idul Fitri 1446H
                      </motion.h1>
                      <motion.p
                        className="text-green-700 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 2 }}
                      >
                        Mohon Maaf Lahir dan Batin
                      </motion.p>
                    </>
                  ) : !showReplyButton ? (
                    // Animasi typing setelah teks utama
                    <TypeAnimation
                      sequence={[
                        `Jadi Maafin aku ya, ${userName} 🙏`, 2000,
                        "Kalo aku pernah salah.. 😔", 2000,
                        "Semoga kita selalu diberikan kemudahan.. ❤️", 2000,
                        () => setShowReplyButton(true), // Setelah animasi selesai, tampilkan teks utama kembali
                      ]}
                      wrapper="p"
                      cursor={true}
                      repeat={0}
                      className="text-green-600 font-medium text-lg"
                    />
                  ) : (
                    // Kembali ke teks utama setelah animasi typing selesai
                    <>
                      <motion.h2 className="font-bold text-green-600 mb-2 text-2xl">
                        Selamat {userName}!
                      </motion.h2>
                      <motion.h1 className="font-bold text-yellow-500 mb-4 text-3xl">
                        Hari Raya Idul Fitri 1446H
                      </motion.h1>
                      <motion.p className="text-green-700 mb-6">
                        Mohon Maaf Lahir dan Batin
                      </motion.p>
                      {/* Tombol Beri Balasan */}
                      <a
                        href={`https://wa.me/62895403003558?&text=Iya%2C%20Barakallahufik..,Iqbal Selamat Idul Fitri, Mohon Maaf Lahir Batin!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                      >
                        Beri Balasan
                      </a>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Petunjuk Membuka */}
          {!isOpen && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-medium">
              Klik untuk membuka
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Envelope;
