export function getFromLocalStorage(key, defaultValue) {
    try {
        return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
    } catch {
        return defaultValue;
    }
}

export function saveToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}
