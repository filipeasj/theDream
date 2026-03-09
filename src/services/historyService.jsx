const STORAGE_KEY = "dream_history";

export function getHistory() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveSession(session) {
    const history = getHistory();
    history.unshift(session);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
}