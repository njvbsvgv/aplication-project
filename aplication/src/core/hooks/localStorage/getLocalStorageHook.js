export const getLocalStorageHook = (itemKey, isStringify) => {
  let item;
  if (isStringify) {
    item = JSON.parse(localStorage.getItem(itemKey));
  }else {
    item = localStorage.getItem(itemKey);
  }
  return item
};
