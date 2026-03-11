import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import DreamSection from "./components/DreamSection";
import AboutSection from "./components/AboutSection";
import HistorySection from "./components/HistorySection";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [secao, setSecao] = useState("inicio");

  const renderizarSecao = () => {
    switch (secao) {
      case "inicio":
        return <HeroSection setSecao={setSecao} />;
      case "sonho":
        return <DreamSection />;
      case "sobre":
        return <AboutSection />;
      case "historico":
        return <HistorySection/>;
      default:
        return <HeroSection setSecao={setSecao} />;
    }
  };

  return (
    <div className="max-h-screen flex flex-col">
      <Navbar setSecao={setSecao} />

      <main className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
          key={secao}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
            className="w-full"
          >
            {renderizarSecao()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;