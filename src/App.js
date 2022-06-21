import React from 'react';
import './App.css';
import ContextApi from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext';

// function App() {
//   return (
//     <>
//      <ContextApi/>
//     </>
//   );
// }

function App() {
  return (
    <ThemeProvider>
      <ContextApi />
    </ThemeProvider>
  )}
export default App;