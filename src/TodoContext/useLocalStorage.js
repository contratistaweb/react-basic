import React from "react";
function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (e) {
          setError(e);
        }
      }, 1000);
    });
    const saveItem = (newItems) => {
      try {
        const stringifiedItem = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItems);
      } catch (error) {
        error(error);
      }
    };
    return { item, saveItem, loading, error };
  }

  export { useLocalStorage }