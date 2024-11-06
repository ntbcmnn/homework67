import { useDispatch } from 'react-redux';
import { addSymbol, calculateResult, clearCalculator, removeLastSymbol, } from '../../slices/calculatorSlice.ts';

const CalculatorKeyboard = () => {
  const dispatch = useDispatch();
  const numbersArray: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  const operatorsArray: string[] = ['+', '-', '*', '/'];

  const handleButtonClick: (symbol: string) => void = (symbol: string) => {
    dispatch(addSymbol(symbol));
  };

  const handleBackspace: () => void = () => {
    dispatch(removeLastSymbol());
  };

  const handleClear: () => void = () => {
    dispatch(clearCalculator());
  };

  const handleCalculate: () => void = () => {
    dispatch(calculateResult());
  };

  return (
    <>
      <div className="d-flex mt-2">
        <button className="px-4 py-3 btn btn-danger m-1" onClick={handleClear}>
          C
        </button>
        <button className="px-4 py-3 btn btn-secondary m-1" onClick={handleBackspace}>
          {'<'}
        </button>
        <button className="px-4 py-3 btn btn-success m-1" onClick={handleCalculate}>
          =
        </button>
      </div>

      <div className="w-25">
        <div className="row justify-content-center mb-2">
          {operatorsArray.map((operator: string) => (
            <div className="col-2 m-1" key={operator}>
              <button
                className="btn btn-warning px-4 py-3 border-0 rounded-3"
                onClick={() => handleButtonClick(operator)}
              >
                {operator}
              </button>
            </div>

          ))}
        </div>

        <div className="row justify-content-center">
          {numbersArray.map((num: string) => (
            <div className="col-3 m-1" key={num}>
              <button
                className="btn btn-secondary py-3 px-4 border-0 rounded-3"
                onClick={() => handleButtonClick(num)}
              >
                {num}
              </button>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default CalculatorKeyboard;