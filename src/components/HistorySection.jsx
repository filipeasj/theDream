import { useHistory } from "../hooks/useHistory";

export default function HistorySection() {
  const { history, clearAll } = useHistory();

  const formatarData = (data) => {
    return new Date(data).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <h1 className="text-red-500 text-5xl font-bold mt-20 mb-5">Histórico</h1>
      <div className="w-full max-w-md mx-auto">
        {history.length === 0 && (
          <p className="text-gray-400">Nenhum sonho registrado ainda</p>
        )}
        {history.length > 0 && (
          <button
            onClick={clearAll}
            className="`px-4 py-1 border rounded-full transition cursor-pointer p-4 mb-5"
          >
            Limpar
          </button>
        )}
        {history.map((item, index) => (
          <div>
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-lg flex justify-between mb-5"
            >
              <span>{item.modo}</span>
              <span className="text-gray-400">{formatarData(item.data)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
