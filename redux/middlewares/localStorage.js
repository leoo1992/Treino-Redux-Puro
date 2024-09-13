export const localStorageMiddleware = (store) => (next) => (action) => {
  const response = next(action);
    if (action.localStorage !== undefined) {
        window.localStorage.clear();
        
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload)
    );
  }

  return response;
};
