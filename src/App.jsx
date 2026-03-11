import { useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = lazy(() => import('./components/HeroSection'));
const DreamSection = lazy(() => import('./components/DreamSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const HistorySection = lazy(() => import('./components/HistorySection'));

function App() {
  const [secao, setSecao] = useState("inicio");

  const renderizarSecao = () => {
    switch (secao) {
      case "inicio":
        return <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}><HeroSection setSecao={setSecao} /></Suspense>;
      case "sonho":
        return <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}><DreamSection /></Suspense>;
      case "sobre":
        return <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}><AboutSection /></Suspense>;
      case "historico":
        return <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}><HistorySection/></Suspense>;
      default:
        return <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}><HeroSection setSecao={setSecao} /></Suspense>;
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