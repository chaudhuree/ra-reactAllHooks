import React from 'react';
import './App.css';
import ContextApi from './FunctionContextComponent'

export const ThemeContext = React.createContext()

function App() {
  return (
    <>
     <ContextApi/>
    </>
  );
}

export default App;