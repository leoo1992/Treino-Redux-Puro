export const logMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  const result = next(action);
  console.log("New_State :", store.getState());
  console.groupEnd();
  return result;
};
