import { SetStateAction, useState } from "react";
import useCureencyInfo from "./useCureencyInfo";
import InputBox from "./InputBox";

const CurrencyConverter = () => {
  const [amout, setAmout] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  type currencyInfoObject = {
    [key: string]: number;
  };
  const currencyInfo: currencyInfoObject = useCureencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amout);
    setAmout(convertedAmount);
  };
  const convertedCurrencyInfo = () => {
    setConvertedAmount(amout * currencyInfo[to]);
  };
  return (
    <div className="w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat mt-10">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-700">
          <h3 className="pb-3 text-lg text-center font-bold text-white">
            Using Custom Hook
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertedCurrencyInfo();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amout}
                currencyOption={options}
                onCurrencyChange={() =>
                  setAmout(amout) as unknown as SetStateAction<number>
                }
                onAmountChange={(amout) => setAmout(amout)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { CurrencyConverter };
