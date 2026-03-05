import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import DreamSection from "./components/DreamSection";
import AboutSection from "./components/Aboutsection";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const[secao, setSecao] = useState("inicio");

  const renderizarSecao = () => {
    switch (secao) {
      case "inicio":
        return <HeroSection setSecao={setSecao} />;
      case "sonho":
        return <DreamSection/>;
      case "sobre":
        return <AboutSection/>;
      default:
        return <HeroSection setSecao={setSecao} />;
    }
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar setSecao={setSecao} />

      <AnimatePresence mode="wait">
        <motion.div
          key={secao}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderizarSecao()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
