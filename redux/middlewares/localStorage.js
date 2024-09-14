export const localStorageMiddleware = (_store) => (next) => (action) => {
  const response = next(action);
  if (action.localStorage !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload)
    );
  }

  return response;
};
