import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/product");
      const json = await res.json();

      setData(json.products || []);  
    } catch (err) {
      console.error("API Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ data, loading, fetchData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
 