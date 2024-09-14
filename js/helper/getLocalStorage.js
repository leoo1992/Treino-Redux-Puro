export default function getLocalStorage(key, initial = null) {
  try {
    const data = JSON.parse(window.localStorage.getItem(key));
    return data || initial;
  } catch (_error) {
    return initial;
  }
}
