import clsx from "clsx";
const StockItems = (props) => {
  const { stock } = props;

  const priceDiff = stock.current_price - stock.previous_price;
  const percentageChange = (priceDiff / stock.previous_price) * 100;

  const isPositive =
    percentageChange >= 0
      ? "bg-green-200 text-green-700"
      : "bg-red-200 text-red-700";

  const price = stock.current_price / 100;

  return (
    <div className="flex border p-4 items-center justify-between bg-slate-200 my-4">
      <div>
        <div className="text-neutral-700">{stock.name}</div>
        <div className="text-2xl text-sky-700 font-bold">{stock.symbol}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className={clsx("rounded-full px-1", isPositive)}>
          {percentageChange.toFixed(2)}%
        </div>
        <div className="text-2xl">${price}</div>
      </div>
    </div>
  );
};
export default StockItems;
