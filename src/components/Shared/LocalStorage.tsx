type Product = {
  id: number;
  price: number;
  count: number;
  image: string;
  name: string;
};

const useLocalStorage = (key: string) => {
  const updateValue = (value: Product[]) => {
    value.length > 0
      ? localStorage.setItem(key, JSON.stringify(value))
      : localStorage.removeItem(key);
  };
  const getValue = () => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  return { updateValue, getValue };
};

export default useLocalStorage;
