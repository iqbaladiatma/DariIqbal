import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Definisikan tipe props untuk komponen Envelope
interface EnvelopeProps {
  userName: string;
}

const Envelope: React.FC<EnvelopeProps> = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTypingMessage, setShowTypingMessage] = useState(false);
  const [showReplyButton, setShowReplyButton] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowTypingMessage(true);
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-md mx-auto text-center">
      {/* Amplop */}
      <div className="relative w-full max-w-md mx-auto cursor-pointer aspect-[3/2]" onClick={handleEnvelopeOpen}>
        <motion.div className="relative w-full h-full bg-gradient-to-br from-green-500 to-blue-500 rounded-xl shadow-xl">
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
                className="absolute inset-4 md:inset-6 bg-white rounded-xl p-4 md:p-6 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  {!showTypingMessage ? (
                    <>
                      <motion.h2 className="font-bold text-green-600 mb-2 text-lg md:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }}>
                        Selamat {userName}!
                      </motion.h2>
                      <motion.h1 className="font-bold text-yellow-500 mb-4 text-xl md:text-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}>
                        Hari Raya Idul Fitri 1446H
                      </motion.h1>
                      <motion.p className="text-green-700 mb-4 md:mb-6 text-sm md:text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2 }}>
                        Mohon Maaf Lahir dan Batin
                      </motion.p>
                    </>
                  ) : !showReplyButton ? (
                    <TypeAnimation
                      sequence={[
                        `Jadi Maafin aku ya, ${userName} 🙏`, 2000,
                        "Kalo aku pernah salah.. 😔", 2000,
                        "Semoga kita selalu diberikan kemudahan.. ❤️", 2000,
                        () => setShowReplyButton(true),
                      ]}
                      wrapper="p"
                      cursor={true}
                      repeat={0}
                      className="text-green-600 font-medium text-base md:text-lg"
                    />
                  ) : (
                    <>
                      <motion.h2 className="font-bold text-green-600 mb-2 text-lg md:text-2xl">Selamat {userName}!</motion.h2>
                      <motion.h1 className="font-bold text-yellow-500 mb-4 text-xl md:text-3xl">Hari Raya Idul Fitri 1446H</motion.h1>
                      <motion.p className="text-green-700 mb-4 md:mb-6 text-sm md:text-base">Mohon Maaf Lahir dan Batin</motion.p>
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