import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const PasswordScreen = () => {
  const {input, isAccessGranted} = useSelector((state: RootState) => state.password);
  const display: string = '*'.repeat(input.length);

  return (
    <div
      className={
      `p-5 border rounded-4 text-center w-25 fs-5 
      bg-${isAccessGranted === null ? 'white' : isAccessGranted ? 'success' : 'danger'}-subtle`
    }
    >
      {display || 'Enter PIN'}
      <p>
        {isAccessGranted === null ? '' : isAccessGranted ? 'Access Granted' : 'Access denied'}
      </p>
    </div>
  );
};

export default PasswordScreen;
