import React,{useState} from 'react';
import './App.css';
import ContextApi from './FunctionContextComponent'

export const ThemeContext = React.createContext()

// function App() {
//   return (
//     <>
//      <ContextApi/>
//     </>
//   );
// }

function App() {
  const [dark,setDark]=useState(true)
  return (
    <ThemeContext.Provider value={{dark,setDark}}>
      <ContextApi />
    </ThemeContext.Provider>
  )}
export default App;