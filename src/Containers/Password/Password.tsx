import PasswordScreen from '../../Components/PasswordScreen/PasswordScreen.tsx';
import PasswordKeyboard from '../../Components/PasswordKeyboard/PasswordKeyboard .tsx';

const Password = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <PasswordScreen/>
      <PasswordKeyboard/>
    </div>
  );
};

export default Password;