import { useEffect, useState } from "react";
import StockItems from "./StockItems";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStocks = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
    )
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const stockItems = stocks.map((stock, idx) => (
    <StockItems key={idx} stock={stock} />
  ));

  return (
    <div className="flex justify-center bg-slate-100 h-full">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <i className="fa-solid fa-spinner animate-spin text-3xl text-blue-500"></i>
        </div>
      ) : (
        <div className="w-full max-w-md m-16">{stockItems}</div>
      )}
    </div>
  );
};
export default App;
