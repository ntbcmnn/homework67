import { useDispatch } from 'react-redux';
import { addSymbol, checkPassword, removeLastSymbol } from '../../slices/passwordSlice.ts';

const PasswordKeyboard = () => {
  const dispatch = useDispatch();
  const numbersArray: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

  const handleButtonClick: (symbol: string) => void = (symbol: string) => {
    dispatch(addSymbol(symbol));
  };

  const handleBackspace: () => void = () => {
    dispatch(removeLastSymbol());
  };

  const handleEnter: () => void = () => {
    dispatch(checkPassword());
  };

  return (
    <>
      <div className="row justify-content-center mt-3">
        {numbersArray.map((num: string) => (
          <button className="pin col-3 m-1 p-2 border-0 rounded-3" key={num} onClick={() => handleButtonClick(num)}>
            {num}
          </button>
        ))}
      </div>

      <div>
        <button className="py-3 px-4 border-0 m-1 rounded-3 btn btn-dark" onClick={handleBackspace}>{'<'}</button>
        <button className="py-3 px-4 border-0 m-1 rounded-3 btn btn-danger" onClick={handleEnter}>E</button>
      </div>
    </>
  );
};

export default PasswordKeyboard;