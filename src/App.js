import React, { useState } from 'react';
import './App.css';
// import FunctionContextComponent from './FunctionContextComponent';
import ContextApi from './FunctionContextComponent'

export const ThemeContext = React.createContext()

function App() {
  // const [darkTheme, setDarkTheme] = useState(true);
  // const toggleTheme = () => setDarkTheme(prevDarkTheme => !prevDarkTheme);
  return (
    <>
     <ContextApi/>
    </>
  );
}

export default App;

