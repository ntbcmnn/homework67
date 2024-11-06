import './App.css';
import Password from './Containers/Password/Password.tsx';
import Calculator from './Containers/Calculator/Calculator.tsx';
import { Route, Routes } from 'react-router-dom';
import ToolBar from './Components/ToolBar/ToolBar.tsx';


const App = () => (
  <>
    <ToolBar/>
    <div className="container m-5">
      <Routes>
        <Route path="/" element={<Password/>}/>
        <Route path="/pin" element={<Password/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
    </div>
  </>

);

export default App;