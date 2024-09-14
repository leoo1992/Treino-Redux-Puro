export default function getPhotoLocalStorage(key, initial = null) {
  try {
    const dataImg = JSON.parse(window.localStorage.getItem(key));
    return dataImg?.[0]?.src || initial;
  } catch (_error) {
    return initial;
  }
}
