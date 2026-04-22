import { useState, useEffect, useRef } from "react";
import { dreamModes, messages } from "../constants";
import { useHistory } from "../hooks/useHistory";

export default function DreamSection() {
  const [modoSelecionado, setModoSelecionado] = useState(dreamModes[0]);
  const [tempo, setTempo] = useState(modoSelecionado.tempo);

  const [rodando, setRodando] = useState(false);
  const [pausado, setPausado] = useState(false);
  const [concluido, setConcluido] = useState(false);

  const [messagesIndex, setMessagesIndex] = useState(0);

  const endAudio = useRef(new Audio("/sounds/end-dream.mp3"));
  const clickAudio = useRef(new Audio("/sounds/click.mp3"));

  const { addSession } = useHistory();

  useEffect(() => {
    setTempo(modoSelecionado.tempo);
    setConcluido(false);
    setRodando(false);
    setPausado(false);
  }, [modoSelecionado]);

  useEffect(() => {
    let intervalo = null;

    if (rodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((prev) => prev - 1);
      }, 1000);
    }

    if (tempo === 0 && rodando) {
      setRodando(false);
      setConcluido(true);

      playSound(endAudio);

      addSession({
        modo: modoSelecionado.nome,
        data: new Date().toISOString(),
      });
    }

    return () => clearInterval(intervalo);
  }, [rodando, tempo]);

  useEffect(() => {
    if (!rodando) return;

    const intervaloMessages = setInterval(() => {
      setMessagesIndex((prev) => (prev + 1) % messages.length);
    }, 10000);

    return () => clearInterval(intervaloMessages);
  }, [rodando]);

  const formatarTempo = (segundos) => {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;

    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const playSound = (audioRef) => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const entrarNoSonho = () => {
    playSound(clickAudio);
    setRodando(true);
    setPausado(false);
    setConcluido(false);
  };

  const pausar = () => {
    playSound(clickAudio);
    setRodando(false);
    setPausado(true);
  };

  const retomar = () => {
    playSound(clickAudio);
    setRodando(true);
    setPausado(false);
  };

  const despertar = () => {
    setRodando(false);
    setPausado(false);
    setConcluido(false);
    setTempo(modoSelecionado.tempo);
  };

  const novoSonho = () => {
    setConcluido(false);
    setTempo(modoSelecionado.tempo);
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-40">
      <div className="text-8xl lg:text-8xl font-medium tracking-widest mb-1">
        {formatarTempo(tempo)}
      </div>

      {(rodando || pausado) && (
        <p className="text-gray-400 mb-10 max-w-md transition-opacity duration-500">
          {messages[messagesIndex]}
        </p>
      )}

      {concluido && (
        <div className="mt-6 mb-10 max-w-md">
          <p className="text-xl text-green-400 mb-2">Você despertou.</p>
          <p className="text-gray-400">
            Seu ciclo de foco terminou. Ideias criadas no sonho agora pertencem
            à realidade.
          </p>
        </div>
      )}

      {!rodando && !pausado && !concluido && (
        <>
          <p className="text-gray-400 mb-10">{modoSelecionado.descricao}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {dreamModes.map((modo, index) => (
              <button
                key={index}
                onClick={() => setModoSelecionado(modo)}
                className={`px-4 py-1 border rounded-full transition cursor-pointer
                ${
                  modoSelecionado.nome === modo.nome
                    ? "border-white text-white"
                    : "border-gray-500 text-gray-400 hover:text-white"
                }`}
              >
                {modo.nome}
              </button>
            ))}
          </div>

          <button
            onClick={entrarNoSonho}
            className="px-8 py-3 border border-red-500 bg-red-500 cursor-pointer rounded-full hover:scale-105 transition"
          >
            Entrar no sonho
          </button>
        </>
      )}

      {rodando && (
        <div className="flex gap-4">
          <button
            onClick={pausar}
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Pausar
          </button>

          <button
            onClick={despertar}
            className="px-8 py-3 border border-red-500 text-red-500 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Chute
          </button>
        </div>
      )}

      {pausado && (
        <div className="flex gap-4">
          <button
            onClick={retomar}
            className="px-8 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Retomar
          </button>

          <button
            onClick={despertar}
            className="px-8 py-3 border border-red-500 text-red-500 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Chute
          </button>
        </div>
      )}

      {concluido && (
        <button
          onClick={novoSonho}
          className="px-8 py-3 border border-green-500 text-green-400 rounded-full hover:scale-105 transition cursor-pointer"
        >
          Iniciar novo sonho
        </button>
      )}
    </section>
  );
}
