export const getLocalStorageHook = (key, parse = false) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return null; 
  }
  if (parse) {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return value;
    }
  }
  return value;
};