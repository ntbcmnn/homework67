import { RootState } from '../../app/store.ts';
import { useSelector } from 'react-redux';

const CalculatorScreen = () => {
  const display: string = useSelector((state: RootState) => state.calculator.display);

  return (
    <div className="display bg-light p-4 mb-2 text-right w-25 border rounded-4">
      {display || '0'}
    </div>
  );
};

export default CalculatorScreen;