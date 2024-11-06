import CalculatorScreen from '../../Components/CalculatorScreen/CalculatorScreen.tsx';
import CalculatorKeyboard from '../../Components/CalculatorKeyboard/CalculatorKeyboard.tsx';


const Calculator = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <CalculatorScreen/>
      <CalculatorKeyboard/>
    </div>
  );
};

export default Calculator;