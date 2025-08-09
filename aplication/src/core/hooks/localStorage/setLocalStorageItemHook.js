export const setLocalStorageItemHook = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  const validatio = JSON.parse(localStorage.getItem(key));
  if (validatio) {
    return true;
  } else {
    return false;
  }
};
