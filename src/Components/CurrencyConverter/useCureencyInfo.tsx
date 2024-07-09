import { useEffect, useState } from "react";

const useCurrencyInfo = (currency: string) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((resp) => resp.json())
      .then((resp) => setData(resp[currency]));
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
