import { useEffect, useState } from "react";
import { clearHistory, getHistory, saveSession } from "../services/historyService";

export function useHistory() {
    const [history, setHistory] = useState([])

useEffect(() => {
    setHistory(getHistory());
}, []);

const addSession = (session) => {
    saveSession(session);
    setHistory(getHistory());
};

const clearAll = () => {
    clearHistory();
    setHistory([]);
}

return { history, addSession, clearAll };
}