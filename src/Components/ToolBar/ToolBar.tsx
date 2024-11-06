import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <div className="bg-dark">
      <div className="container p-4 d-flex gap-4">
        <NavLink to="/pin" className="text-decoration-none text-white fs-5">Pin checker</NavLink>
        <NavLink to="/calculator" className="text-decoration-none text-white fs-5">Calculator</NavLink>
      </div>
    </div>
  );
};

export default ToolBar;